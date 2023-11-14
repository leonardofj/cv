import React from "react";
import Header from "./Header";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Side from "./Side";

const CV = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="container print-area">
      <Header />
      <About />
      <Education />
      <div className="row mt-2">
        <Side />
        <Experience />
      </div>
    </div>
  );
});

export default CV;
