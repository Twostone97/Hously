import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./dashboard/dashboard.js";
import HousesMain from "./houses/housesMain.js";

function BasicExample() {
    return (
        <Router>
            <>
                <Route exact path="/app/dashboard" component={Dashboard} />
                <Route exact path="/react-houses" component={HousesMain} />
            </>
        </Router>
    );
}

ReactDOM.render(<BasicExample />, document.querySelector("#reactApp"));
