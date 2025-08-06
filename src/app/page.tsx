"use client";

import { ContainerSidebarComp } from "@/components/HomeContainer";
import { HomeSidebarComp } from "@/components/HomeSidebar";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [sidebar, setSidebar] = useState<boolean>(true);
  useEffect(() => {
    const isDesktop = window.innerWidth >= 768; // Tailwind's md breakpoint
    setSidebar(isDesktop); // true for desktop, false for mobile
  }, []);
  return (
    <div className="w-full flex min-h-screen">
      {sidebar && <HomeSidebarComp setSidebar={setSidebar} />}
      <ContainerSidebarComp setSidebar={setSidebar} sidebar={sidebar} />
    </div>
  );
}
