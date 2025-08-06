"use client";
import { toggleTheme } from "@/redux/slice/themeSlice";
import { MyRootState } from "@/redux/store/store";
import { ArrowLeft, Menu, Moon, SunMedium, SunMoon } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ContainerSidebarComp = ({setSidebar, sidebar} : {setSidebar: Dispatch<SetStateAction<boolean>> , sidebar : boolean}) => {
  const dispatch = useDispatch();
  const theme = useSelector((state: MyRootState) => state.theme);

  return (
    <>
      <div className="w-[100%] p-0 bg-green-100 md:w-[80%]">
        <div className="w-full flex items-center justify-between px-6 py-2 bg-gray-800 text-white shadow-md">
          <div className="flex text-xl font-semibold">
            <Menu className="md:hidden cursor-pointer" onClick={()=> {
              console.log("open")
              setSidebar(true)
            }}/>

            <label>Home</label>
          </div>
          
          <div className="space-x-4">
                 <button
          onClick={() => dispatch(toggleTheme())}
          className=" px-4 py-2"
        >

          {theme.theme === "dark" ? <Moon /> : <SunMedium />}  

        </button>
          </div>
        </div>
      </div>
    </>
  );
};
