import React from "react";
import ReactDOM from "react-dom";

const Foo = () => {
    return (
        <div className="dashboard__sections__box__body bg-placeholder">
            <img className="placeholder" src="/img/dashboard/placeholder.png" />
        </div>
    );
};

ReactDOM.render(<Foo />, document.querySelector("#reactApp"));
