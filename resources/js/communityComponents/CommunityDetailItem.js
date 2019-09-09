import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import DashboardContext from "../context/dashboard/DashboardContext";

const CommunityDetailItem = ({ match }) => {
    const dashboardContext = useContext(DashboardContext);
    const { users, current_user } = dashboardContext.data;
    const { userid } = match.params;
    console.log(current_user);

    const currentUser = users.filter(usr => {
        return usr.id == userid;
    });

    return (
        <Route>
            <div className="community__subpage__detail">
                <div className="detail__item">
                    <div className="detail__item__img">
                        <img
                            src={
                                currentUser[0].profile_image
                                    ? require(`../../../storage/app/public/${userid}.png`)
                                    : require(`../../../storage/app/public/unknown.png`)
                            }
                            alt=""
                        />
                    </div>
                    <div className="detail__item__txt">
                        <h3>
                            {currentUser[0].first_name}{" "}
                            {currentUser[0].last_name}
                        </h3>
                    </div>
                </div>
                <form
                    encType="multipart/form-data"
                    onSubmit={e => {
                        e.preventDefault();
                        const data = new FormData(e.target);
                        e.target[0].value = "";
                        fetch("/messageroom", {
                            method: "post",
                            body: data
                        }).then(() => {
                            return (window.location =
                                "http://www.hously.test/app/messenger");
                        });
                    }}
                >
                    <input
                        type="hidden"
                        name="with"
                        value={`${userid};${current_user.id}`}
                    />
                    <input
                        type="hidden"
                        name="_token"
                        value={
                            document.querySelector('meta[name="csrf-token"]')
                                .content
                        }
                    />

                    <button type="submit">Napsat zprávu</button>
                </form>
            </div>
        </Route>
    );
};

export default CommunityDetailItem;
