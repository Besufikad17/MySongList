import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { rootSaga } from "./sagas/rootSaga";
import createSagaMiddleware from "redux-saga";
import songReducer from "./slices/songSlice";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        songReducer
    },
    middleware: [ sagaMiddleware ]
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

