import React from "react";
import Header from "./Header";
import Experience from "./Experience";
import Sidebar from "./Sidebar";

const Resume = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="container-md print-area p-0">
      <Header />
      <div className="container px-0">
        <div className="row gx-4 mt-2 mx-0">
          <Sidebar />
          <Experience />
        </div>
      </div>
    </div>
  );
});

export default Resume;
