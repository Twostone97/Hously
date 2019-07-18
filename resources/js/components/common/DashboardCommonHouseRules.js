import React, { useState } from "react";

const DashboardCommonHouseRules = ({
    rules,
    profile,
    building,
    refetchApp
}) => {
    const [file, setFile] = useState(null);
    const handleFile = e => {
        setFile(e.target.files[0]);
    };

    console.log(building);

    let _token = document.querySelector('meta[name="csrf-token"]').content;
    const handleSubmit = e => {
        e.preventDefault();
        let data = new FormData();
        data.append("file", file);
        data.append("_token", _token);
        data.append("id", building.id);
        fetch(`/updatebuilding`, {
            method: "POST",

            body: data
        }).then(() => {
            refetchApp();
        });
    };

    return (
        <div className="page__main__dash__item i__full" id="house-rules">
            <div className="page__main__dash__item__head">
                <h3>House Rules</h3>
            </div>

            {profile === "administrator" ? (
                <>
                    <div className="page__main__dash__item__body scrollable">
                        <textarea className="house__rules" readOnly>
                            {rules}
                        </textarea>
                    </div>
                    <form
                        className="form__container"
                        encType="multipart/form-data"
                        onSubmit={handleSubmit}
                        style={{ width: "65%", margin: "0 auto" }}
                    >
                        <div className="form__item">
                            <label>New rules</label>
                            <input
                                type="file"
                                name="file"
                                onChange={handleFile}
                            />
                            <input type="hidden" name="id" />
                        </div>
                        <button type="submit" className="form__submit">
                            Submit
                        </button>
                    </form>
                </>
            ) : (
                <div className="page__main__dash__item__body scrollable">
                    <textarea className="house__rules" readOnly>
                        {rules}
                    </textarea>
                </div>
            )}
        </div>
    );
};

export default DashboardCommonHouseRules;
