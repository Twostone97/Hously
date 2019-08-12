import React, { useContext } from "react";
import DashboardContext from "../../context/dashboard/DashboardContext";

const NoticeboardDeleteElement = ({ notice_id }) => {
    const dashboardContext = useContext(DashboardContext);
    return (
        <>
            <form
                className="item__deleteTag"
                encType="multipart/form-data"
                onSubmit={e => {
                    e.preventDefault();
                    const data = new FormData(e.target);
                    dashboardContext.deleteNotice(notice_id, data);
                }}
            >
                <input
                    type="hidden"
                    name="_token"
                    value={
                        document.querySelector('meta[name="csrf-token"]')
                            .content
                    }
                />
                <button>
                    <img src="/img/trash-ico.svg" alt="" />
                </button>
            </form>
        </>
    );
};

export default NoticeboardDeleteElement;
