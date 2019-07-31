import React from "react";

const HouseDetail = ({ house }) => {
    return (
        <tr>
            <td>{house.city}</td>
            <td>{house.street}</td>
            <td>{house.house_number}</td>
            <td>{house.created_at}</td>
            <td>Více info</td>
        </tr>
    );
};
export default HouseDetail;
