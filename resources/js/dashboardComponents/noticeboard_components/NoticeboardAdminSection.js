import React, { useState, useContext } from "react";
import NoticeboardAddElement from "./NoticeboardAddElement";

const NoticeboardAdminSection = () => {
    const [showAddElement, setshowAddElement] = useState(false);

    return (
        <>
            <div className="notices__list__adminHandler">
                {!showAddElement && (
                    <button
                        onClick={() => {
                            setshowAddElement(true);
                        }}
                    >
                        <img src="/img/write-ico.svg" alt="" />
                    </button>
                )}

                {showAddElement && (
                    <>
                        <NoticeboardAddElement />
                        <a
                            href="#"
                            onClick={() => {
                                window.event.preventDefault();
                                setshowAddElement(false);
                            }}
                        >
                            Hide
                        </a>
                    </>
                )}
            </div>
        </>
    );
};

export default NoticeboardAdminSection;
