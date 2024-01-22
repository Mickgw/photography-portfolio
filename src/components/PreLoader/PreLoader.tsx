import React, { useContext, useEffect, useState } from "react";
import { HeaderText } from "./HeaderText";
import { LoadingCounter } from "./LoadingCounter";
import { gsap } from "gsap";

const PreLoader = () => {
    return (
        <div className="pre-loader-wrapper fixed w-full h-full inset-0 bg-black z-[100]">
            <HeaderText />
            <LoadingCounter />
        </div>
    );
};

export default PreLoader;
