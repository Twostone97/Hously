import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import DashboardMain from "./components/DashboardMain";

const App = () => {
    //ahoj do Inventi: HOOOOOOOOOOOOOOKS
    const [api, setapi] = useState({});
    const [loading, setloading] = useState(true);
    const [errorFetch, setErrorFetch] = useState(false);

    useEffect(() => {
        fetch("/api")
            .then(resp => resp.json())
            .then(data => {
                console.log({ data });
                setapi(data);
            })
            .catch(() => {
                setErrorFetch(true);
            })
            .finally(() => {
                setloading(false);
            });
    }, []);

    return errorFetch ? (
        <section className="page__main bg__gradient-light">
            <div className="page__main__promo">
                <h1>Fetching data failed</h1>
            </div>
        </section>
    ) : (
        <section className="page__main bg__gradient-light">
            <div className="page__main__promo">
                <h1>Hously Dashboard</h1>
                <h5>Dear User, welcome to your kingdom</h5>
            </div>
            <DashboardMain apidata={api} isLoading={loading} />
        </section>
    );
};

ReactDOM.render(<App />, document.querySelector("#reactApp"));
