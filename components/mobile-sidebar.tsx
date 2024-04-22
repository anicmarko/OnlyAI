"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";

const MobileSidebar= () => {
    const [isMounted,setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true);
        // For solving hydratation error
    },[]);

    if(!isMounted){
        return null;
    }

    return (
        <Sheet>
            <SheetTrigger className="md:hidden">
                    <Menu/>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar/>
            </SheetContent>
        </Sheet>
    );
}


export default MobileSidebar;