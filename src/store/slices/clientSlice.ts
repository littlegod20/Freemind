import { ClientDetailsTypes } from "@/pages/ClientPages/clientTypes";
import { createSlice } from "@reduxjs/toolkit";

interface ClientState {
  clients: ClientDetailsTypes[];
  client: ClientDetailsTypes | null;
  state: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ClientState = {
  clients: [],
  client: null,
  state: "idle",
  error: null,
};

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {},
});

export default clientSlice.reducer;
