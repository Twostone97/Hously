import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const HouseItem = ({ house, match }) => {
    return (
        <tr>
            <td>{house.city}</td>
            <td>{house.street}</td>
            <td>{house.house_number}</td>
            <td>{house.created_at}</td>
            <td>
                <Link to={`${match.url}/${house.id}`}>Více info</Link>
            </td>
        </tr>
    );
};

const Test = props => {
    return <h1>This building id is {props.match.params.handle}</h1>;
};

export default HouseItem;
