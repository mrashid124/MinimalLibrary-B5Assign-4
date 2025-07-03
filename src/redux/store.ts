import { configureStore } from "@reduxjs/toolkit";
import { Api } from "./api/Api";
import bookSlice from "./features/books/bookSlice";
import borrowSlice from "./features/borrow/borrowSlice";



export const store = configureStore({
  reducer: {
    books: bookSlice,
    borrow: borrowSlice,
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;