import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../ComonCompo/Footer";
import Navber from "../ComonCompo/Navber";
import SiteBar from "../ComonCompo/SiteBar";

const Main = () => {
  return (
    <div>
      <Navber />
      <div className="flex flex-row">
        <section className="fixed h-full">
          <SiteBar />
        </section>
        <section className="w-full mb-20 lg:ml-60">
          <Outlet />
        </section>
      </div>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Main;
