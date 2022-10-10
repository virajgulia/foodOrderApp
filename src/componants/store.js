import { createStore } from "redux";
import { rootreducer } from "./redux/Rootreducer";

export const store = createStore(rootreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())