import React, { memo, useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

import porto from "../data/porto.json";
import { useSelector } from "react-redux";

const Portfolio = () => {
    const [selectedFilter, setSelectedFilter] = useState("all")

    return (
        <div className="px-5 md:px-10 pt-5 pb-10 ">
            <div className=" px-2 flex justify-between items-center  ">
                <div className="mb-3 lg:mb-0 py-2  dark:rounded">
                    <p className="text-4xl dark:text-purple-500">Portfolio</p>
                    <p className="text-sm md:text-base">
                        This is my previous works, personal (experiments). and freelance project list
                    </p>
                </div>

            </div>
            <div className="mt-2 flex  mb-5 w-full items-center  justify-between lg:justify-end">
                <div className="flex items-center">
                    <p className="mr-2">Filter</p>
                    <select
                        value={selectedFilter}
                        onChange={(e) => setSelectedFilter(e.target.value)}
                        className="w-[130px] mr-2 border border-purple-600  py-1 focus:outline focus:outline-purple-600 focus:outline-2 focus:outline-offset-2 dark:bg-badgeFancy rounded-md">
                        <option value={"all"} className="dark:bg-badgeFancy dark:text-white">All</option>
                        <option value={"experiment"} className="dark:bg-badgeFancy dark:text-white">Experiment</option>
                        <option value={"work"} className="dark:bg-badgeFancy dark:text-white">Work</option>
                    </select>

                </div>
                <span className=" dark:text-white text-black rounded font-bold">
                    {porto.data.length} items
                </span>

            </div>
            <div
                defaultValue={"all"}
                className="grid grid:col-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {porto.data.filter((d) => selectedFilter == "all" || d.filter == selectedFilter).map((d, i) => {
                    return <Card data={d} increment={i + 1} key={i} />;
                })}
            </div>
        </div>
    );
};

export default memo(Portfolio);

const Card = ({ data, increment }) => {
    // console.log();
    const [detail, setDetail] = useState(null);
    const theme = useSelector((state) => state.theme.value);

    const navigate = useNavigate();

    const [size, setSize] = useState(0);

    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", updateSize);
        updateSize();

        return () => window.removeEventListener("resize", updateSize);
    }, [size]);

    useEffect(() => {
        if (detail !== null) {
            navigate(`/portfolio/${data?.slug}`, {
                replace: true,
                state: detail,
                title: data?.title,
            });
        }
        return () => setDetail(null);
    }, [detail, data, navigate]);

    return (
        <div
            data-aos="zoom-in"
            data-aos-offset="0"
            data-aos-delay={size > 650 ? 50 * increment : 200}
            className="relative group md:h-72 md:mb-5" style={{ marginBottom: size > 650 ? "100px" : "0" }}
        >
            <div
                className={`card-list-porto ${theme === "dark" ? "listPortoDark" : "listPortoLight overflow-hidden rounded-lg"
                    }`}
            >
                <div className="card-list-porto-container-img">
                    <div className={size > 800 ? "h-80" : null}>
                        <LazyLoadImage
                            className=" bg-purple-600 img-lazy h-full "
                            src={data?.primaryImg}
                            alt="Image Alt"
                        />
                    </div>
                    <div className="card-info-technology text-xs  ">
                        {data?.detail?.technology?.map((d, i) => (
                            <span key={i}>{d} &nbsp; &nbsp;</span>
                        ))}
                        {data?.detail?.integration?.map((d, i) => (
                            <span key={i}>{d} &nbsp; &nbsp;</span>
                        ))}
                    </div>
                </div>
                <div className="h-16 px-2 items-center flex justify-between ">
                    <span className="text-xs dark:bg-badgeFancy px-2 rounded-full text-white">
                        {data?.title}
                    </span>

                    <button
                        onClick={() => setDetail(data)}
                        className="p-2  animate-none group-hover:animate-bounce dark:bg-purple-900 dark:text-white  text-xs w-24"
                    >
                        See Detail
                    </button>
                </div>
            </div>
        </div>
    );
};

// animation
