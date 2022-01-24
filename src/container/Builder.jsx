import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Resume from "../components/Resume";
import Templates from "../components/Templates";

const Builder = () => {
  return (
    <div className="px-2 md:px-5 ">
      <div className="bg-gray-50">
        <Navbar />
      </div>

      <div className="h-full mt-5">
        <Routes>
          <Route path="/" element={<Templates />} />
          <Route path="/resume/:resumeId" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
};

export default Builder;
