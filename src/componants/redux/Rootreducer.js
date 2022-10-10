import { combineReducers } from "redux";
import Buybtnreducer from "./Reducer/Buybtnreducer";
import Cartaddreducer from "./Reducer/Cartaddreducer";
export const rootreducer = combineReducers({ Buybtnreducer, Cartaddreducer })