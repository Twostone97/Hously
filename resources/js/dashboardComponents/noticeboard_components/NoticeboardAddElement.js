import React, { useContext } from "react";
import DashboardContext from "../../context/dashboard/DashboardContext";

const NoticeboardAddElement = () => {
    const dashboardContext = useContext(DashboardContext);
    const { noticeboard } = dashboardContext.data;

    return (
        <div className="notices__add">
            <form
                encType="multipart/form-data"
                onSubmit={e => {
                    e.preventDefault();
                    const data = new FormData(e.target);
                    e.target[0].value = "";
                    dashboardContext.addNotice(data);
                }}
            >
                <label htmlFor="notice">
                    <textarea id="notice" name="notice" />
                </label>
                <input
                    type="hidden"
                    name="noticeboard"
                    value={noticeboard.id}
                />
                <input
                    type="hidden"
                    name="_token"
                    value={
                        document.querySelector('meta[name="csrf-token"]')
                            .content
                    }
                />
                <br />
                <label htmlFor="permanent">
                    Featured?
                    <input type="checkbox" name="permanent" label="permanent" />
                </label>
                <br />
                <button>Add</button>
            </form>
        </div>
    );
};

export default NoticeboardAddElement;
