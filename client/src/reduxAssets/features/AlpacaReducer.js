import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2'

const initialState = {
    allAlpaca: [],
    status: 'idle',
    isRegistered: false,
};


// ------------------All data Getter Setter Reducers ------------------//

// asyn getter
export const dataFetcher = createAsyncThunk(
    'dataFetcherSlice/dataFetcher',
    async () => {
        const data = await axios.get('/data')
        return await data.data
    }
)
// asyn setter
const dataFetcherSlice = createSlice({
    name: 'dataFetcherSlice',
    initialState,
    extraReducers: {
        [dataFetcher.pending]: (state, action) => {
            state.status = 'loading';
        },
        [dataFetcher.fulfilled]: (state, { payload }) => {
            if (payload) {
                state.allAlpaca = payload;
                state.status = 'success';
            } else {
                state.status = 'error';
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${payload.message}`,
                    footer: '<a>Why do I have this issue?</a>'
                })
            }
        },
        [dataFetcher.rejected]: (state, { payload }) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${payload.message}`,
                footer: '<a>Why do I have this issue?</a>'
            })
            state.status = 'rejected';
        },
    },
})





// ------------------New Alpaca Data Setter Reducers ------------------//


// asyn getter
export const alpacaRegister = createAsyncThunk(
    'alpacaRegisterSlice/alpacaRegister',
    async (newAlpaca) => {
        const data = await axios.post('/addentry', newAlpaca)
        return await data.data
    }
)
// asyn setter
const alpacaRegisterSlice = createSlice({
    name: 'alpacaRegisterSlice',
    initialState,
    extraReducers: {
        [alpacaRegister.pending]: (state, action) => {
            state.status = 'loading';
        },
        [alpacaRegister.fulfilled]: (state, { payload }) => {
            if ((payload.success)) {
                state.isRegistered = payload.success;
                state.status = 'success';
                Swal.fire(
                    'Good job!',
                    'Successfully Registered',
                    'success'
                )
            } else {
                state.status = 'error';
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${payload.message}`,
                    footer: '<a>Why do I have this issue?</a>'
                })
            }
        },
        [alpacaRegister.rejected]: (state, { payload }) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${payload.message}`,
                footer: '<a>Why do I have this issue?</a>'
            })
            state.status = 'rejected';
        },
    },
})


// -------------Exporter-----------------//  
export const dataFetcherReducer = dataFetcherSlice.reducer;
export const alpacaRegisterReducer = alpacaRegisterSlice.reducer;
