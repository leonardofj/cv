import Resume from "./components/Resume";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./css/style.css";

export default function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    copyStyles: true,
    pageStyle: ".printable-component { background-color: transparent; }",
  });

  return (
    <>
      <div className="container-sm navbar p-1">
        <button
          className="rounded-2 ms-2"
          onClick={handlePrint}
          aria-label="Print Resume"
        >
          Printable version
        </button>
      </div>
      <Resume ref={componentRef} />
    </>
  );
}
