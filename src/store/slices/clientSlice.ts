import { ClientDetailsTypes } from "@/pages/ClientPages/clientTypes";
import { createSlice } from "@reduxjs/toolkit";

interface ClientState{
    clients: ClientDetailsTypes[];
    client: ClientDetailsTypes | null;
    state: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ClientState = {
    clients: [],
    client: null,
    state: 'idle',
    error: null
} 

const clientSlice = createSlice({ 
    name: 'client',
    initialState,
    reducers: {
        fetchClientsStart(state){
            state.state = 'loading';
        },
        fetchClientsSuccess(state, action){
            state.state = 'succeeded';
            state.clients = action.payload;
        },
        fetchClientsFailed(state, action){
            state.state = 'failed';
            state.error = action.payload;
        },
        fetchClientStart(state){
            state.state = 'loading';
        },
        fetchClientSuccess(state, action){
            state.state = 'succeeded';
            state.client = action.payload;
        },
        fetchClientFailed(state, action){
            state.state = 'failed';
            state.error = action.payload;
        },
        clearClient(state){
            state.client = null;
        }
    }
});

export default clientSlice.reducer;