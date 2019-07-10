import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import DashboardMain from "./components/DashboardMain";

const App = () => {
    //ahoj do Inventi: HOOOOOOOOOOOOOOKS
    const [api, setapi] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        fetch("http://www.hously.test/api")
            .then(resp => resp.json())
            .then(data => setapi(data))
            .finally(setloading(false));
    }, []);

    return (
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
