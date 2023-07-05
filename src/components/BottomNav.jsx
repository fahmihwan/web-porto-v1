import React, { memo } from "react";

import { NavLink, useLocation } from "react-router-dom";
import { IoBagCheckSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { useSelector } from "react-redux";

const BottomNav = () => {
    const modal = useSelector((state) => state.modal.value);
    const activeClassName =
        "flex items-center  bg-white dark:bg-[#504585] dark:text-white  py-1 rounded border-2 border-yellow-500 dark:border-purple-600 ";
    const InActiveClassName =
        "flex items-center  bg-white dark:bg-[#504585] dark:text-white  py-1 rounded border-2 border-transparent";

    return (
        <div
            className={`p-2 sticky bottom-0 z-50 ${
                !modal ? "" : "hidden"
            } md:hidden `}
        >
            <div className="bg-lightBlue dark:bg-[#281f53] border border-lightBlue   dark:border-[#6b5dd3]  flex p-2 text-xs rounded ">
                <div className="w-10/12 flex">
                    <div className="w-1/3 px-1 ">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? activeClassName : InActiveClassName
                            }
                        >
                            <div className="w-fit mx-auto ">
                                <AiFillHome className="mx-auto" />
                                <span>Home</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-1/3 px-1 ">
                        <NavLink
                            to="/portfolio"
                            className={({ isActive }) =>
                                isActive ? activeClassName : InActiveClassName
                            }
                        >
                            <div className="w-fit mx-auto ">
                                <IoBagCheckSharp className="mx-auto" />
                                <span>Portfolio</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-1/3 px-1 ">
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? activeClassName : InActiveClassName
                            }
                        >
                            <div className="w-fit mx-auto ">
                                <FaUser className="mx-auto" />
                                <span>About</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="w-2/12">
                    <div className="border border-lightBlue dark:border-purple-700 md:border-violet-900 bg-white  dark:bg-elFancy rounded-full h-14 w-14  flex items-center justify-center absolute right-5 top-[-10px]">
                        <div className="flex items-center h-11 w-11 rounded-full  bg-blue-600  dark:bg-purple-700 text-white">
                            <FilterIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default memo(BottomNav);

const FilterIcon = () => {
    const location = useLocation();

    switch (location.pathname) {
        case "/":
            return <AiFillHome className="mx-auto text-2xl" />;
        case "/portfolio":
            return <IoBagCheckSharp className="mx-auto text-2xl" />;

        case "/about":
            return <FaUser className="mx-auto text-2xl" />;
        default:
            return <IoBagCheckSharp className="mx-auto text-2xl" />;
    }
};
