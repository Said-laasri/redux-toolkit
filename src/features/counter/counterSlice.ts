// DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
};

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented(state) {
            // immer make is immutable
            // under the hood
            state.value++;
        },
        decremented(state) {
            state.value--;
        },
        reseted(state) {
            state.value = 0;
        },
        amountAdded(state, action: PayloadAction<number>) {
            state.value += action.payload;
        }
    }
});

export const { incremented, decremented, reseted, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;