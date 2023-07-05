import { useEffect, useState } from "react";

import "./App.css";
import AOS from "aos";
import Snowfall from "react-snowfall";
import { useSelector } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";

import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import Home from "./menu/Home";
import Portfolio from "./menu/Portfolio";
import Detail from "./menu/Detail";
import About from "./menu/About";

function App() {
    const theme = useSelector((state) => state.theme.value);
    const modal = useSelector((state) => state.modal.value);
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
        document.body.style.overflow = "";
    }, []);

    useEffect(() => {
        theme === "dark"
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
    }, [theme]);

    return (
        <div className="bg-[#f6f8fd] dark:bg-fancy min-h-screen text-black  dark:text-gray-400 ">
            <TopNav />
            {!modal && theme !== "light" && (
                <Snowfall
                    style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
                    snowflakeCount={40}
                    color={"#9a93cb"}
                    // radius={[0.5, 3.8]}
                />
            )}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:id" element={<Detail />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <BottomNav />
        </div>
    );
}

export default App;
