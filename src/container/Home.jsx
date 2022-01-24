import React, { useState, useRef, useEffect } from "react";
import Builder from "./Builder";
import { Link, Route, Routes } from "react-router-dom";

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // set scroll to the top of our page
    scrollRef.current.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex bg-white flex-col h-full transition-height duration-75 ease-out">
      <div
        className="pb-2 flex-1 h-screen overflow-y-scroll hide_scrollbar"
        ref={scrollRef}
      >
        <Routes>
          <Route path="/*" element={<Builder />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
