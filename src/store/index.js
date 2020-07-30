import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import studentsReducer from "../reducers/students";
import projectsReducer from "../reducers/projects";

import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    students: {
        data: [],
        loading: true
    },
    projects : {
        data: [],
        loading: true
    }
};

const bigReducer = combineReducers({ students: studentsReducer, projects: projectsReducer });

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
