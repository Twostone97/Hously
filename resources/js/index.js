import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
    const [api, setapi] = useState([]);

    useEffect(() => {
        fetch("http://www.hously.test/api")
            .then(resp => resp.json())
            .then(data => setapi(data));
    }, []);
    return <>{api.residents.items[0].id}</>;
};

ReactDOM.render(<App />, document.querySelector("#test"));
