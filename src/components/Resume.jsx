import React, { useEffect, useState } from "react";
import { useParams, Route, Routes, useNavigate } from "react-router-dom";
import { PersonalInfo, EducationalInfo, WorkExperience } from "./";
import { MdAccountCircle } from "react-icons/md";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import Builder from "./Builder";

const isActive = "border-b-4 border-emerald-500";
const isNotActive = "border-b-0";

const Resume = () => {
  const { resumeId } = useParams();
  const [tab, setTab] = useState("personal");
  const [personalInfo, setPersonalInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([
    { university: "", startDate: new Date(), endDate: new Date() },
  ]);
  const [workInfo, setWorkInfo] = useState([
    { company: "", startDate: new Date(), endDate: new Date() },
  ]);

  useEffect(() => {
    console.log(personalInfo, educationInfo, workInfo);
  }, [tab]);

  if (!resumeId) return null;
  return (
    <div className="flex flex-1 flex-col justify-center items-center  ">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4  h-full w-full">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-between items-center w-full h-auto relative">
            {/* tab icons */}
            <div className="flex justify-around items-center w-full h-20 p-2 ">
              <div
                onClick={() => setTab("personal")}
                className={`${tab == "personal" ? isActive : isNotActive}
                w-40 flex justify-center items-center p-2 hover:border-b-4 border-emerald-500 transition-all duration-100 ease-in-out`}
              >
                <MdAccountCircle fontSize={30} className="" />
              </div>
              <div
                onClick={() => setTab("education")}
                className={`${tab == "education" ? isActive : isNotActive}
                w-40 flex justify-center items-center p-2 hover:border-b-4 border-emerald-500 transition-all duration-100 ease-in-out`}
              >
                <FaGraduationCap fontSize={30} className="" />
              </div>
              <div
                onClick={() => setTab("work")}
                className={`${tab == "work" ? isActive : isNotActive}
                  w-40 flex justify-center items-center p-2 hover:border-b-4 border-emerald-500 transition-all duration-100 ease-in-out`}
              >
                <FaBriefcase fontSize={30} className="" />
              </div>
            </div>

            {/* tab Content */}
            <div className="w-full h-auto flex flex-1 flex-col items-center justify-center">
              <Builder
                tab={tab}
                setTab={setTab}
                setPersonalInfo={setPersonalInfo}
                educationInfo={educationInfo}
                setEducationInfo={setEducationInfo}
                workInfo={workInfo}
                setWorkInfo={setWorkInfo}
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-700 col-span-1">2</div>
      </div>
    </div>
  );
};

export default Resume;
