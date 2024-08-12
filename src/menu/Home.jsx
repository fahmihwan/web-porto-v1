import React from "react";
import { FaReact, FaLaravel } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { Link } from "react-router-dom";
import ProfileImg from "../components/ProfileImg";
import { FaLinkedin } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import summary from "../data/summary.json";
import { useSelector } from "react-redux";

const Home = () => {
    const theme = useSelector((state) => state.theme.value);

    return (
        // <div className="">
        <>
            {/* <div className="relative z-50  flex flex-col-reverse md:flex-row mt-10 mx-5 md:mx-20 lg:mx-40  "> */}
            <div className="relative z-50  flex flex-col-reverse md:flex-row mt-10 mx-5 md:mx-20 lg:mx-40  ">
                <div className="w-full md:w-8/12 ">
                    <div className="pt-10 h-full ">
                        <section className="mb-5 md:mb-10 ">
                            <p
                                data-aos="fade-right"
                                className="text-xl md:text-5xl mb-2 text-blue-600 dark:text-white"
                            >
                                Hi, I'm <span className="text-purple-500 ">Fahmi Ichwanurrohman</span>
                            </p>
                            <p
                                data-aos="fade-right"
                                data-aos-delay="300"
                                className="mb-3 text-xl md:text-2xl "
                            >
                                {summary.home}
                            </p>
                        </section>

                        <section className="mb-10">
                            <div className="flex items-center  ">
                                <Link
                                    className="border-dashed bg-white dark:bg-transparent hover:border-solid border  border-gray-400 dark:border-white p-2  mr-2"
                                    to={"/about"}
                                >
                                    Learn About Me
                                </Link>

                                <a
                                    className="border-dashed bg-white dark:bg-transparent hover:border-solid border border-gray-400 dark:border-white p-2 mr-2 "
                                    target={"_blank"}
                                    rel="noreferrer noopener"
                                    href="/cv/cv.pdf"
                                >
                                    Resume
                                </a>
                                <a
                                    className="text-blue-600 dark:text-purple-500 "
                                    target={"_blank"}
                                    rel="noreferrer noopener"
                                    href="https://www.linkedin.com/in/fahmi-i-40a864111/"
                                >
                                    <FaLinkedin className="text-5xl mr-3" />
                                </a>
                            </div>
                        </section>

                        <section className="mb-10 md:mb-0">
                            <div className="mb-3">Current Favorite Tech Stack</div>
                            <div className="flex ">
                                <FaLaravel className="text-red-600 dark:text-purple-600 text-6xl mr-3 " />
                                <FaReact className="text-sky-600 dark:text-purple-600 text-6xl mr-3 " />
                                <SiPhp className="text-blue-800 dark:text-purple-600 text-6xl mr-3 " />
                                <IoLogoJavascript className="text-yellow-500 dark:text-purple-600 text-6xl mr-3 " />
                            </div>
                        </section>
                    </div>
                </div>
                <div className="w-full md:w-4/12 flex md:flex-none justify-center  ">
                    <ProfileImg />
                </div>
            </div>
            <svg
                className="absolute bottom-0 hidden md:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    // fill="#fff"
                    fill={theme === "dark" ? "#181538" : "#fff"}
                    fillOpacity="1"
                    d="M0,32L48,37.3C96,43,192,53,288,96C384,139,480,213,576,218.7C672,224,768,160,864,149.3C960,139,1056,181,1152,165.3C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        {/* // </div> */}
        </>
    );
};

export default Home;
