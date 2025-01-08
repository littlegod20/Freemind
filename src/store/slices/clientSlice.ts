import { TableDetailsTypes } from "@/utils/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ClientState {
  clients: TableDetailsTypes[];
  client: TableDetailsTypes | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: unknown;
}

const initialState: ClientState = {
  clients: [],
  client: null,
  status: "idle",
  error: null,
};

const postClientInvite = createAsyncThunk(
  "clients/post-invites",
  async (inviteData: TableDetailsTypes, thunkAPI) => {
    try {
      const response = localStorage.setItem(
        "clients",
        JSON.stringify(inviteData)
      );

      console.log("Client Invite:", response);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue({
        message: err,
        status: err,
      });
    }
  }
);

const fetchClientInvite = createAsyncThunk(
  "clients/fetch-invites",
  async (_, thunkAPI) => {
    try {
      const response = localStorage.getItem("clients");
      if (!response) return;
      return JSON.parse(response);
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
        (
          state,
          action: PayloadAction<{
            clients: TableDetailsTypes[];
            client: TableDetailsTypes;
          }>
        ) => {
          state.status = "succeeded";
          state.clients = action.payload.clients;
          state.client = action.payload.client;
        }
      )
      .addCase(
        postClientInvite.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.status = "failed";
          state.error = action.payload;
        }
      )
      .addCase(fetchClientInvite.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchClientInvite.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(
        fetchClientInvite.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.status = "failed";
          state.error = action.payload;
        }
      );
  },
});

export default clientSlice.reducer;
