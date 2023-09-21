import { AnyAction, configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        bcf: bcfSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
function bcfSlice(state: unknown, action: AnyAction): unknown {
    throw new Error('Function not implemented.');
}

