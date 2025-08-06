"use client";

import React, { useEffect, useState ,  Dispatch, SetStateAction} from "react";
import {
  Facebook,
  Factory,
  Instagram,
  Smile,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { store, MyRootState } from "@/redux/store/store";
import { toggleTheme } from "@/redux/slice/themeSlice";

export const HomeSidebarComp = ({setSidebar } : {setSidebar: Dispatch<SetStateAction<boolean>>}) => {
    const [sidebar, setSidebar2] = useState(true);

  const dispatch = useDispatch();
  const theme = useSelector((state: MyRootState) => state.theme);

  return (
    <>
    
      <div
        className={`w-[80%] ${
          sidebar ? "" : "hidden"
        } flex flex-col items-center absolute h-screen top-0 left-0 p-2  md:w-[20%] md:static md:h-auto md:top-auto md:left-auto  
        ${
          theme.theme === "dark"
            ? `bg-${theme.themeColor.background} text-${theme.themeColor.textColor}`
            : "bg-white text-black"
        }`}
      >
             <X className="md:hidden cursor-pointer right-0 absolute m-2" onClick={()=> {
              console.log("close")
              setSidebar(false)
            }}/>

        <Image
          src="/images/profile.png"
          alt="Profile photo"
          width={50}
          height={50}
          className="rounded-full border-2 border-blue-500 object-cover w-[27%] h-[10%]"
        />
        <h1>Rahul Bharti</h1>

        <div
          className="flex gap-4 items-center mt-2"
          onClick={() => {
            dispatch(toggleTheme());
          }}
        >
          <Facebook className="w-6 h-6 text-blue-600" />
          <Twitter className="w-6 h-6 text-sky-500" />
          <Instagram className="w-6 h-6 text-pink-500" />
          <Youtube className="w-6 h-6 text-red-600" />
        </div>

        <div className="w-full h-1px bg-amber-500 m-2"></div>
        <div className="w-full items-start">
          <p className="bg-gray-300 border-0 p-2 rounded-[10px]">Skills</p>
          <p>Android</p>
        </div>
      </div>
    </>
  );
};
