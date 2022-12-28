import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../ComonCompo/Footer";
import Navber from "../ComonCompo/Navber";

const Main = () => {
  return (
    <div>
      <Navber />
      <div class="flex flex-row">
        <section class="basis-1/4">
          <h2>section 1</h2>
        </section>
        <section class="w-full">
          <Outlet />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
