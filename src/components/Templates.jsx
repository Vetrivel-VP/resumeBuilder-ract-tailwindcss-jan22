import React from "react";
import Template from "./Template";
import templates from "./Data";

const Templates = () => {
  return (
    <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3 ">
      {templates &&
        templates.map((data) => <Template key={data.id} data={data} />)}
    </div>
  );
};

export default Templates;
