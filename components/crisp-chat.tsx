"use client";

import { useEffect } from "react";
import {Crisp} from "crisp-sdk-web";


export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("be659b6a-a00e-44e3-b413-2532eb6d5fa1")
        Crisp.load();
    }, []);
    
    return null;
}