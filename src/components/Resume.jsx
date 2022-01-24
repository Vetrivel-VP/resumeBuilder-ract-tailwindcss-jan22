import React from "react";
import { useParams } from "react-router-dom";

const Resume = () => {
  const params = useParams();
  console.log(params.resumeId);
  return <div>Resume</div>;
};

export default Resume;
