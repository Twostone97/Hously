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
                <Link
                    to={{
                        pathname: `${match.url}/${house.id}`,
                        state: {
                            house: house
                        }
                    }}
                >
                    Více info
                </Link>
            </td>
        </tr>
    );
};

export default HouseItem;
