import { TableDetailsTypes } from "@/utils/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ClientState {
  clients: TableDetailsTypes[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: unknown;
}

const initialState: ClientState = {
  clients: [],
  status: "idle",
  error: null,
};

const postClientInvite = createAsyncThunk<
  TableDetailsTypes[],
  TableDetailsTypes
>("clients/post-invites", async (inviteData: TableDetailsTypes, thunkAPI) => {
  try {
    // getting the previous clients stored in json
    const prevClientsJson = localStorage.getItem("clients");
    const prevClients: TableDetailsTypes[] = prevClientsJson
      ? JSON.parse(prevClientsJson)
      : [];

    // adding a new client to an array
    const updatedClients = [...prevClients, inviteData];

    localStorage.setItem("clients", JSON.stringify(updatedClients));
    return updatedClients;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue({
      message: err,
      status: err,
    });
  }
});

const fetchClientsInvite = createAsyncThunk(
  "clients/fetch-invites",
  async (_, thunkAPI) => {
    try {
      const response = localStorage.getItem("clients");
      if (!response) return [];
      return JSON.parse(response) as TableDetailsTypes[];
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue({
        message: err,
        status: err,
      });
    }
  }
);

const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(postClientInvite.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        postClientInvite.fulfilled,
        (state, action: PayloadAction<TableDetailsTypes[]>) => {
          state.status = "succeeded";
          state.clients = action.payload;
        }
      )
      .addCase(postClientInvite.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchClientsInvite.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchClientsInvite.fulfilled, (state, action:PayloadAction<TableDetailsTypes[]>) => {
        state.status = "succeeded";
        state.clients = action.payload
      })
      .addCase(fetchClientsInvite.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default clientSlice.reducer;
