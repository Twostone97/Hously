import React, { useReducer } from "react";
import axios from "axios";
import DashboardContext from "./DashboardContext";
import DashboardReducer from "./DashboardReducer";

import { FETCH_DATA, SET_LOADING } from "../types";

const DashboardState = props => {
    const initialState = {
        data: [],
        loading: false,
        test: "test"
    };

    const [state, dispatch] = useReducer(DashboardReducer, initialState);

    return (
        <DashboardContext.Provider
            value={{
                data: state.data,
                loading: state.loading,
                test: state.test
            }}
        >
            {props.children}
        </DashboardContext.Provider>
    );
};

export default DashboardState;
