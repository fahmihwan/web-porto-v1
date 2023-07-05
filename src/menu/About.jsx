import React, { memo, useEffect } from "react";
import ProfileImg from "../components/ProfileImg";
import work_experience from "../data/work_experience.json";
import json_skills from "../data/skills.json";

import "aos/dist/aos.css";

import summary from "../data/summary.json";
// icon
import { FaReact, FaLaravel, FaPhp, FaJava } from "react-icons/fa";
import { SiJavascript, SiAngular, SiCodeigniter } from "react-icons/si";
import { SlArrowDown } from "react-icons/sl";
import { GrMysql } from "react-icons/gr";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail, AiOutlineLine } from "react-icons/ai";

import { useSelector } from "react-redux";
import { useState } from "react";

const About = () => {
    return (
        <div className="">
            <Description />
            <div className="mx-5 md:mx-10">
                <div className=" lg:flex ">
                    <div
                        data-aos="fade-down"
                        className="w-full lg:w-5/12 md:mb-10 h-fit lg:mr-3 p-5 mb-10 rounded-lg bg-white dark:bg-elFancy  dark:text-textFancy  "
                    >
                        <p className="text-4xl mb-3 text-black dark:text-purple-600">Experience</p>
                        <div className="relative ">
                            {work_experience.data.map((d, i) => (
                                <WorkExperience d={d} key={i} />
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-7/12  ">
                        <div className="md:flex">
                            <div
                                data-aos="fade-down"
                                className="w-full md:w-1/2 mb-10 md:mb-0 md:mr-3 p-5 rounded-lg bg-white dark:bg-elFancy dark:text-textFancy   "
                            >
                                <p className="text-4xl mb-3 text-black dark:text-purple-600">Skill</p>
                                <Skills />
                            </div>
                            <div
                                data-aos="fade-down"
                                className="w-full md:w-1/2 p-5 h-80 rounded-lg bg-white  dark:bg-elFancy dark:text-textFancy "
                            >
                                <p className="text-4xl mb-3 text-black dark:text-purple-600">Education</p>
                                <Education />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// export default About;
export default memo(About);

const Description = () => {
    return (
        <div className="w-full px-10 mt-5 pb-10">
            <p className="text-4xl pb-10 md:hidden text-black dark:text-purple-600">Yo, hello there!</p>
            <div className="flex flex-wrap-reverse mb-5">
                <div className="w-full md:w-8/12 md:px-5 text-black dark:text-textFancy z-10">
                    <section className="mt-5 md:mt-0 ">
                        <p
                            className="text-4xl mb-5 hidden md:block text-black dark:text-purple-600 "
                            data-aos="fade-right"
                            data-aos-delay="100"
                        >
                            Yo, hello there!
                        </p>

                        <p className="text-justify " data-aos="fade-right" data-aos-delay="300">
                            {summary.abut}
                        </p>
                    </section>
                    <section className="pt-3 mt-5 flex">
                        <a
                            className="text-lightBlue dark:text-purple-500 "
                            target={"_blank"}
                            rel="noreferrer noopener"
                            href="https://github.com/fahmihwan"
                        >
                            <FaGithub className="text-4xl mr-3 stroke-2 " />
                        </a>
                        <a
                            className="text-lightBlue dark:text-purple-500 "
                            target={"_blank"}
                            rel="noreferrer noopener"
                            href="https://www.linkedin.com/in/fahmi-i-40a864111/"
                        >
                            <FaLinkedin className="text-4xl mr-3" />
                        </a>
                        <a
                            className="text-lightBlue dark:text-purple-500 "
                            target={"_blank"}
                            rel="noreferrer noopener"
                            href="mailto:fahmiiwan86@gmail.com"
                        >
                            <AiOutlineMail className="text-4xl mr-3" />
                        </a>
                    </section>
                </div>
                <div className="w-full md:w-3/12 flex justify-center z-10">
                    <ProfileImg data-aos="flip-up" />
                </div>
            </div>
        </div>
    );
};

const WorkExperience = ({ d }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <span className="bg-lightBlue dark:bg-purple-700  w-5 h-5 rounded-full absolute flex items-center justify-center">
                <span className="bg-white dark:bg-orange-200 w-2 h-2 block rounded-full"></span>
            </span>
            <div className="border-l-4 ml-2 pl-5 md:pl-8 border-lightBlue dark:border-purple-600 pb-5">
                <div className="mb-1">
                    <div className="flex justify-between">
                        <p className="font-semibold ">
                            {d.title} . <span className="font-light text-sm">{d.category}</span>
                        </p>
                        <span
                            className=" cursor-pointer w-5 h-5 flex items-center "
                            onClick={() => setToggle(!toggle)}
                        >
                            {toggle ? (
                                <AiOutlineLine className={` mx-auto `} />
                            ) : (
                                <SlArrowDown className={` mx-auto `} />
                            )}
                        </span>
                    </div>
                    <p className="text-sm">
                        {d.company} · <span className="font-light text-sm ">{d.duration}</span>
                    </p>
                </div>
                <ul className={`text-xs list-disc  pl-3 dropdown-content ${toggle ? " active" : "inactive"}`}>
                    <li className="list-none">{d?.description}</li>
                    {d.subDescription.map((list, i) => {
                        return <li key={i}>{list}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

const Skills = () => {
    const theme = useSelector((state) => state.theme.value);

    return (
        <>
            <ul>
                {json_skills?.data?.map((d, i) => {
                    return (
                        <li className="flex mb-3" key={i}>
                            <div className="">
                                <div className="mr-3 bg-lightBlue dark:bg-purple-700  opacity-95 text-white w-10 h-10  flex items-center justify-center rounded-full ">
                                    <FilterIcon icon={d.title} />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex justify-between ">
                                    <p>{d.title}</p>
                                    <p className="text-xs">{d.value} %</p>
                                </div>
                                <progress
                                    className={`${
                                        theme === "dark"
                                            ? "progressbar-skill-dark"
                                            : "progressbar-skill-light"
                                    }`}
                                    value={d.value}
                                    max={100}
                                ></progress>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

const Education = () => {
    return (
        <>
            <span className="bg-lightBlue dark:bg-purple-700  w-5 h-5 rounded-full absolute flex items-center justify-center">
                <span className="bg-white dark:bg-orange-200 w-2 h-2 block rounded-full"></span>
            </span>
            <div className="border-l-4 ml-2 pl-4 border-lightBlue dark:border-purple-600 pb-5">
                <div className="mb-1">
                    <p className="font-semibold text-sm">Universitas Teknologi Yogyakarta</p>
                    <p className="text-sm font-semibold mb-2">S1 Sistem Informasi</p>
                    <p className="text-xs ">
                        Graduated from Yogyakarta Technology University's S1 Information System in 2022 with a
                        GPA of 3.26.
                    </p>
                </div>
            </div>
            <span className="bg-lightBlue dark:bg-purple-700 w-5 h-5 rounded-full absolute flex items-center justify-center">
                <span className="bg-white dark:bg-orange-200 w-2 h-2 block rounded-full"></span>
            </span>
            <div className="border-l-4 ml-2 pl-4 border-lightBlue dark:border-purple-600 pb-5">
                <div className="mb-1">
                    <p className="font-semibold text-sm">SMAN 1 MAOSPATI</p>
                    <p className="text-sm font-semibold mb-2">IPA</p>
                    <p className="text-xs">SMAN 1 Maospati graduate, majoring in natural sciences </p>
                </div>
            </div>
        </>
    );
};

const FilterIcon = ({ icon }) => {
    switch (icon) {
        case "Laravel":
            return <FaLaravel className="text-2xl" />;
        case "CodeIgniter 4":
            return <SiCodeigniter className="text-2xl" />;
        case "ReactJs":
            return <FaReact className="text-2xl" />;
        case "Javascript":
            return <SiJavascript className="text-2xl" />;
        case "PHP":
            return <FaPhp className="text-2xl" />;
        case "Java":
            return <FaJava className="text-2xl" />;
        case "AngularTs":
            return <SiAngular className="text-2xl" />;
        case "MYSQL":
            return <GrMysql className="text-2xl" />;
        default:
            break;
    }
};
