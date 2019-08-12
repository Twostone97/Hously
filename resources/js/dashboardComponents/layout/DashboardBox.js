import React from "react";

const DashboardBox = ({ style, headline, content, linkTo }) => {
    return (
        <div className="dashboard__sections__box" style={style}>
            <a href={linkTo}>
                <div className="dashboard__sections__box__head">
                    <h1>{headline}</h1>
                </div>
                {content}
            </a>
        </div>
    );
};

export default DashboardBox;
