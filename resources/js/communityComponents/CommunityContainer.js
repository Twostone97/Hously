import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CommunityListItem from "./CommunityListItem";
import CommunityDetailItem from "./CommunityDetailItem";
import DashboardContext from "../context/dashboard/DashboardContext";

const CommunityContainer = () => {
    const dashboardContext = useContext(DashboardContext);
    const [userDetail, setUserDetail] = useState("1");
    const { users } = dashboardContext.data;

    let userListKey = 0;

    if (dashboardContext.loading || dashboardContext.errorFetch) {
        return (
            <div className="dashboard__sections__box subpage">
                <div className="dashboard__sections__box__body content-loading">
                    {dashboardContext.errorFetch ? (
                        <h4>"Fetch failed..."</h4>
                    ) : (
                        <img src="/img/layout/spinner.gif" />
                    )}
                </div>
            </div>
        );
    } else {
        return (
            <Router>
                <div className="dashboard__sections__box subpage">
                    <div className="dashboard__sections__box__head">
                        <h2>Naše komunita</h2>
                        <a href="/app/dashboard">
                            <div className="close__icon">
                                <img
                                    src="/img/icons/dashboard/boxes/close.svg"
                                    alt=""
                                />
                            </div>
                        </a>
                    </div>
                    <div className="dashboard__sections__box__body subpage">
                        <div className="community__subpage">
                            <div className="community__subpage__list">
                                {users.map(user => {
                                    return (
                                        <CommunityListItem
                                            user_id={user.id}
                                            profile_img={
                                                user.profile_image != null &&
                                                true
                                            }
                                            name={user.first_name}
                                            surname={user.last_name}
                                            key={userListKey++}
                                            setUserDetail={setUserDetail}
                                        />
                                    );
                                })}
                                {users.map(user => {
                                    return (
                                        <CommunityListItem
                                            user_id={user.id}
                                            profile_img={
                                                user.profile_image != null &&
                                                true
                                            }
                                            name={user.first_name}
                                            surname={user.last_name}
                                            key={userListKey++}
                                            setUserDetail={setUserDetail}
                                        />
                                    );
                                })}
                                {users.map(user => {
                                    return (
                                        <CommunityListItem
                                            user_id={user.id}
                                            profile_img={
                                                user.profile_image != null &&
                                                true
                                            }
                                            name={user.first_name}
                                            surname={user.last_name}
                                            key={userListKey++}
                                            setUserDetail={setUserDetail}
                                        />
                                    );
                                })}
                            </div>
                            <Switch>
                                <Route
                                    exact
                                    path="/app/community/:userid"
                                    component={CommunityDetailItem}
                                />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
};

export default CommunityContainer;
