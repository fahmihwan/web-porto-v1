import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { memo, useEffect, useMemo } from "react";
// import React, { memo, useMemo } from "react";

import { MdArrowBackIos } from "react-icons/md";
import Modal from "../components/Modal";
// redux
import { modalUpdate } from "../features/modalSlice";
import { showImgUpdate } from "../features/showImgSlice";

const Detail = () => {
    const navigate = useNavigate();

    let { detail, primaryImg, title } = useLocation().state;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showImgUpdate(primaryImg.slice(1)));
    }, [primaryImg, dispatch]);

    const dataImg = useMemo(() => getDataFromJson(detail), [detail]);

    return (
        <div className={`px-4 md:px-10 pt-5 pb-10`}>
            <div className="mb-5 p-2 rounded flex justify-between dark:bg-elFancy dark:text-textFancy ">
                <p className="text-xl">Detail Portfolio</p>
                <button
                    onClick={() => navigate("/portfolio")}
                    className=" bg-purple-800 animate-bounce hover:animate-none  px-2 rounded-full text-white flex items-center"
                >
                    <MdArrowBackIos /> Back
                </button>
            </div>

            <SliderEl dataImg={dataImg} />
            <NoteEl detail={detail} title={title} />
        </div>
    );
};

const getDataFromJson = (detail) => {
    let dataImg = []; // get totalImg and convert to directory folder (string)
    for (let i = 1; i <= detail.totalImg; i++) {
        let dir = `${detail.dir + i}.png`;
        dataImg.push(dir);
    }
    return dataImg;
};

export default memo(Detail);

const SliderEl = ({ dataImg }) => {
    const showImg = useSelector((state) => state.showImg.value);
    const dispatch = useDispatch();

    return (
        <div className="mb-5 lg:flex ">
            <div className="w-full lg:w-3/4 my-5 md:mt-0 md:mr-5  rounded overflow-hidden bg-violet-400 dark:bg-badgeFancy">
                <div className="py-2 md:py-4 px-3 bg-gray-600 flex ">
                    <div className="bg-red-400 w-2 h-2 rounded-full mr-1"></div>
                    <div className="bg-yellow-400 w-2 h-2 rounded-full mr-1"></div>
                    <div className="bg-green-400 w-2 h-2 rounded-full mr-1"></div>
                </div>
                {/* modal */}
                <Modal />

                <div
                    className="relative overflow-hidden cursor-zoom-in"
                    onClick={() => dispatch(modalUpdate(true))}
                >
                    <img className="absolute h-screen blur " src="/foto-profile/bg-img.jpg" alt="" />

                    <img
                        src={showImg}
                        alt=""
                        className="relative px-1 py-5 md:px-5 z-10 object-contain md:object-contain
                        h-[240px] h-max-[430px] md:h-max-[0px] md:h-[500px]
                        mx-auto"
                    />
                </div>
            </div>

            <div className="w-full lg:w-1/4 rounded bg-lightBlue md:bg-white dark:bg-elFancy">
                <div
                    className="flex lg:flex-col border-purple-600
                overflow-x-scroll lg:overflow-x-visible lg:overflow-y-scroll
                lg:h-[540px]  items-end pb-3 md:pb-0 "
                >
                    {dataImg.map((d, i) => {
                        return (
                            <img
                                key={i + 1}
                                src={d}
                                alt=""
                                className={`w-28 md:w-56 h-20 md:h-28 object-contain md:mb-5 mr-2  lg:mx-auto bg-lightBlue dark:bg-badgeFancy border-orange-400 dark:border-purple-600 duration-150 ${
                                    showImg === d ? "border-4 " : "border-0"
                                }`}
                                onMouseEnter={() => dispatch(showImgUpdate(d))}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const NoteEl = ({ detail, title }) => {
    return (
        <div className="w-full ">
            <div className="mb-5 dark:bg-elFancy  dark:text-textFancy ">
                <p className=" text-2xl text-purple-400">{title}</p>
            </div>
            <div className="mb-2 md:mb-5">
                <p className="text-black font-bold dark:text-white ">Description</p>
                <p className="text-xs md:text-base text-justify">{detail.description}</p>
            </div>
            <div className="md:flex">
                {detail.fitur.length !== 0 && (
                    <div className="mb-2 w-full md:w-1/2">
                        <p className="text-black font-bold dark:text-white">Features</p>
                        <ul className="text-xs md:text-base list-disc ml-3">
                            {detail.fitur.map((d, i) => {
                                return <li key={i}>{d}</li>;
                            })}
                        </ul>
                    </div>
                )}
                <div className="w-full md:w-1/2">
                    <div className="mb-2">
                        <p className="mb-1 text-black font-bold dark:text-white">Technology</p>
                        <ul className="text-xs  flex flex-wrap">
                            {detail.technology.map((d, i) => {
                                return (
                                    <li
                                        key={i}
                                        className="mr-2 mb-2 p-1 rounded bg-lightBlue  dark:bg-badgeFancy text-white dark:text-purple-400 "
                                    >
                                        {d}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {detail.integration.length !== 0 && (
                        <div className="mb-2">
                            <p className="mb-1 text-black font-bold dark:text-white">Integration</p>
                            <ul className="text-sm  flex">
                                {detail.integration.map((d, i) => {
                                    return (
                                        <li
                                            key={i}
                                            className="mr-3 p-1 rounded bg-lightBlue  dark:bg-badgeFancy text-white dark:text-purple-400"
                                        >
                                            {d}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                    {detail.link.length !== 0 && (
                        <div className="mb-2">
                            <p className="mb-1 text-black font-bold dark:text-white">Link</p>
                            <a
                                className="text-blue-600 underline underline-offset-2"
                                target={"_blank"}
                                rel="noreferrer noopener"
                                href={detail.link}
                            >
                                {detail.link}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
