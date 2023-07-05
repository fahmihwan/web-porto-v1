import React from "react";
// AiOutlineCompress

// redux
import { useDispatch, useSelector } from "react-redux";
import { modalUpdate } from "../features/modalSlice";

const Modal = () => {
    const modal = useSelector((state) => state.modal.value);
    const showImg = useSelector((state) => state.showImg.value);

    const dispatch = useDispatch();

    return (
        <>
            {modal ? (
                <>
                    <div
                        onClick={() => dispatch(modalUpdate(false))}
                        className="flex  backdrop-blur-xl justify-center items-center w-full h-screen bg-black bg-opacity-30 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 cursor-zoom-out"
                    >
                        <div className=" w-11/12 h-11/12 lg:max-m-28  rounded overflow-hidden">
                            <img
                                className="mx-auto  object-contain h-[540px]  h-max-[580px] md:h-max-[0px] md:h-[580px] drop-shadow-md"
                                src={showImg}
                                alt=""
                            />
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Modal;
