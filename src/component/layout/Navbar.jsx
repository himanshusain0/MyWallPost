"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../component/ui/nevbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
     
    </div>
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
       

<MenuItem setActive={setActive} active={active} item="Home">
  <HoveredLink  href="/">Welcome home</HoveredLink>
</MenuItem>
       <MenuItem setActive={setActive} active={active} item="About Us">
  <HoveredLink className ="bg-white" href="/about">Who we are</HoveredLink>
</MenuItem>
<MenuItem setActive={setActive} active={active} item="Portfolio">
  <HoveredLink  href="/portfolio">Our work speaks</HoveredLink>
</MenuItem>
 <MenuItem setActive={setActive} active={active} item="Services">
  <div className="text-sm grid grid-cols-2 gap-6 p-4">
    <ProductItem
      title="Web Design"
      href="/web-design"
      src="/images/web-design.jpg"
      description="Beautiful, responsive, and user-centric design." />
    <ProductItem
      title="Web Development"
      href="/web-development"
      src="/images/web-development.jpg"
      description="Powerful and scalable codebase for the web." />
    <ProductItem
      title="Digital Marketing"
      href="/digital-marketing"
      src="/images/digital-marketing.jpg"
      description="Reach your audience where it matters most." />
    <ProductItem
      title="SEO / SMO"
      href="/seo-smo"
      src="/images/seo-smo.jpg"
      description="Optimize your presence and get found faster." />
    <ProductItem
      title="App Development"
      href="/app-development"
      src="/images/app-development.jpg"
      description="Modern mobile and desktop apps, built to perform." />
  </div>
</MenuItem>
<MenuItem setActive={setActive} active={active} item="Contact">
  <HoveredLink href="/contact">Let’s talk</HoveredLink>
</MenuItem>

      </Menu>
    </div>
  );
}
