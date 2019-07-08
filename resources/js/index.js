import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
    //ahoj do Inventi: HOOOOOOOOOOOOOOKS
    const [api, setapi] = useState([]);

    useEffect(() => {
        fetch("http://www.hously.test/api")
            .then(resp => resp.json())
            .then(data => setapi(data));
    }, []);

    useEffect(() => {
        console.log(api);
    }, [api]);
    // return <>{api.residents.items[0].id}</>;

    return (
        <section className="page__main bg__gradient-light">
            <div className="page__main__promo">
                <h1>Hously Dashboard</h1>
                <h5>Dear User, welcome to your kingdom</h5>
            </div>
            <div className="page__main__dash">
                <div className="page__main__dash__item i__mid">
                    <div className="page__main__dash__item__head">
                        <h4>Newsfeed</h4>
                    </div>
                    <div className="page__main__dash__item__body">
                        React will load this
                    </div>
                </div>
                <div className="page__main__dash__item i__mid">
                    <div className="page__main__dash__item__head">
                        <h4>Latest chats</h4>
                    </div>
                    <div className="page__main__dash__item__body">
                        React will load this
                    </div>
                </div>
            </div>
            <div className="page__main__dash">
                <div className="page__main__dash__item i__mid">
                    <div className="page__main__dash__item__head">
                        <h4>My personal information</h4>
                    </div>
                    <div className="page__main__dash__item__body">
                        React will load this
                    </div>
                </div>
                <div className="page__main__dash__item i__small">
                    <div className="page__main__dash__item__head">
                        <h4>My legal documents</h4>
                    </div>
                    <div className="page__main__dash__item__body">
                        React will load this
                    </div>
                </div>
            </div>
            <div className="page__main__dash">
                <div className="page__main__dash__item i__big">
                    <div className="page__main__dash__item__head">
                        <h4>House Rules</h4>
                    </div>
                    <div className="page__main__dash__item__body">
                        React will load this
                    </div>
                </div>
                <div className="page__main__dash__item i__small">
                    <div className="page__main__dash__item__head">
                        <h4>Important house data</h4>
                    </div>
                    <div className="page__main__dash__item__body">
                        React will load this
                    </div>
                </div>
            </div>
            <div className="page__main__dash">
                <div className="page__main__dash__item i__small">
                    <div className="page__main__dash__item__head">
                        <h4>Address book</h4>
                    </div>
                    <div className="page__main__dash__item__body">
                        React will load this
                    </div>
                </div>
                <div className="page__main__dash__item i__big">
                    <div className="page__main__dash__item__head">
                        <h4>Hously communities</h4>
                    </div>
                    <div className="page__main__dash__item__body">
                        React will load this
                    </div>
                </div>
            </div>
        </section>
    );
};

ReactDOM.render(<App />, document.querySelector("#reactApp"));
