import React, { useReducer, useEffect } from "react";
import axios from "axios";
import DashboardContext from "./DashboardContext";
import DashboardReducer from "./DashboardReducer";

import { FETCH_DATA, SET_LOADING, ERROR_FETCH, FETCH_CHATS } from "../types";

const DashboardState = props => {
    const initialState = {
        data: [],
        chats: [],
        loading: true,
        errorFetch: false
    };

    const [state, dispatch] = useReducer(DashboardReducer, initialState);

    const fetchData = () => {
        //fetches all Hously Data
        fetch("/api")
            .then(resp => resp.json())
            .then(data => {
                dispatch({ type: FETCH_DATA, payload: data });
            })
            .catch(() => {
                dispatch({ type: ERROR_FETCH });
            });
    };

    const fetchChats = () => {
        //fetches chats only
        fetch("/chatapi")
            .then(resp => resp.json())
            .then(data => dispatch({ type: FETCH_CHATS, payload: data.chats }));
    };

    const deleteNotice = (notice_id, data) => {
        //deletes a notice on a noticeboard
        const fetchURL = "/su/delete/notice/" + notice_id;
        fetch(fetchURL, {
            method: "post",
            body: data
        }).then(() => {
            fetchData();
        });
    };

    const addNotice = data => {
        //adds new notice to the noticeboard
        fetch("/notice", {
            method: "post",
            body: data
        }).then(() => {
            fetchData();
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <DashboardContext.Provider
            value={{
                data: state.data,
                chats: state.chats,
                loading: state.loading,
                errorFetch: state.errorFetch,
                fetchData,
                fetchChats,
                deleteNotice,
                addNotice
            }}
        >
            {props.children}
        </DashboardContext.Provider>
    );
};

export default DashboardState;
