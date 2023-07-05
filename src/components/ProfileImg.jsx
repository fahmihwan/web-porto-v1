import React from "react";
import { useSelector } from "react-redux";
const ProfileImg = () => {
    const theme = useSelector((state) => state.theme.value);

    return (
        <>
            <div className={theme === "dark" ? "profilImgDark" : "profilImgLight bg-lightBlue"}>
                <img
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    className="w-60"
                    alt="Lightning"
                    src="/foto-profile/fahmi.png"
                />
            </div>
        </>
    );
};

export default ProfileImg;
