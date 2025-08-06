"use client";

import React, { useState, Dispatch, SetStateAction } from "react";
import { Facebook, Instagram, Twitter, Youtube, X } from "lucide-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { MyRootState } from "@/redux/store/store";
import { toggleTheme } from "@/redux/slice/themeSlice";

export const HomeSidebarComp = ({
  setSidebar,
}: {
  setSidebar: Dispatch<SetStateAction<boolean>>;
}) => {
  const [sidebar, setSidebar2] = useState(true);
  const dispatch = useDispatch();
  const theme = useSelector((state: MyRootState) => state.theme);

  const isDark = theme.theme === "dark";
  const bgColor = isDark ? `bg-${theme.themeColor.background}` : "bg-white";
  const textColor = isDark
    ? `text-${theme.themeColor.textColor}`
    : "text-gray-900";

  return (
    <aside
      className={`z-50 w-[80%] md:w-[20%] h-screen md:h-auto md:static absolute top-0 left-0 p-4 flex flex-col items-center gap-4 shadow-md transition-all duration-300 ease-in-out 
      ${sidebar ? "block" : "hidden"}
      ${bgColor} ${textColor}`}
    >
      {/* Close Icon for Mobile */}
      <X
        className="md:hidden cursor-pointer absolute top-3 right-3 w-6 h-6 text-gray-600 hover:text-red-500 transition"
        onClick={() => setSidebar(false)}
      />

      {/* Profile Image */}
      <Image
        src="/images/profile.png"
        alt="Profile"
        width={80}
        height={80}
        className="rounded-full border-4 border-blue-500 object-cover"
      />

      {/* Username */}
      <h2 className="text-xl font-semibold">Rahul Bharti</h2>

      {/* Social Icons */}
      <div className="flex gap-4 items-center">
        <a href="#" className="hover:scale-110 transition-transform">
          <Facebook className="w-6 h-6 text-blue-600" />
        </a>
        <a href="#" className="hover:scale-110 transition-transform">
          <Twitter className="w-6 h-6 text-sky-500" />
        </a>
        <a href="#" className="hover:scale-110 transition-transform">
          <Instagram className="w-6 h-6 text-pink-500" />
        </a>
        <a href="#" className="hover:scale-110 transition-transform">
          <Youtube className="w-6 h-6 text-red-600" />
        </a>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-amber-500 my-4" />

      {/* Skills Card */}
      <div className={`w-full  p-4 space-y-3 `}>
        <p className="text-lg font-semibold bg-gray-200 text-gray-800 px-3 py-1 rounded-md w-fit">
          Skills
        </p>
        <ul className="list-disc list-inside space-y-1">
          <p className="text-lg font-semibold bg-gray-200 text-gray-800 px-3 py-1 rounded-md w-fit">
            Android
          </p>{" "}
          <p className="ml-5">
            Java, kotlin, jetpack compose, map, room, dagger-hilt, work-manager,
          </p>
          <p className="text-lg font-semibold bg-gray-200 text-gray-800 px-3 py-1 rounded-md w-fit">
            React Native
          </p>
          <p className="ml-5">
            React.js, , hooks, map, realm, socket, axios, redux, javascript
          </p>
          <p className="text-lg font-semibold bg-gray-200 text-gray-800 px-3 py-1 rounded-md w-fit">
            React.js
          </p>
          <p className="ml-5">
            React.js, map, realm, socket, axios, redux, javascript , typescript
          </p>
          <p className="text-lg font-semibold text-gray-800 px-3 py-1 rounded-md w-fit bg-gradient-to-r from-green-500 via-white to-red-500">
            Next.js framework
          </p>
          <p className="ml-5">
            React.js, socket, axios, redux, javascript , typescript,
          </p>
        </ul>
      </div>
    </aside>
  );
};
