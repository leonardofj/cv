import React from "react";
import Header from "./Header";
import Experience from "./Experience";
import Side from "./Side";

const CV = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="container-md print-area p-0">
      <Header />
      <div className="container px-0">
        <div className="row gx-4 mt-2 mx-0">
          <Side />
          <Experience />
        </div>
      </div>
    </div>
  );
});

export default CV;
