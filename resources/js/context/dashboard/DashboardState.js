import React, { useReducer, useEffect } from "react";
import axios from "axios";
import DashboardContext from "./DashboardContext";
import DashboardReducer from "./DashboardReducer";

import { FETCH_DATA, SET_LOADING, ERROR_FETCH } from "../types";

const DashboardState = props => {
    const initialState = {
        data: [],
        loading: true,
        errorFetch: false
    };

    const [state, dispatch] = useReducer(DashboardReducer, initialState);

    const fetchData = () => {
        fetch("/api")
            .then(resp => resp.json())
            .then(data => {
                dispatch({ type: FETCH_DATA, payload: data });
            })
            .catch(() => {
                dispatch({ type: ERROR_FETCH });
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <DashboardContext.Provider
            value={{
                data: state.data,
                loading: state.loading,
                errorFetch: state.errorFetch
            }}
        >
            {props.children}
        </DashboardContext.Provider>
    );
};

export default DashboardState;
