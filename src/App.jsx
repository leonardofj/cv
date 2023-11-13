import CV from "./components/CV";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./css/style.css";

export default function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    copyStyles: true,
    pageStyle: ".print-component { background-color: transparent; }",
  });

  return (
    <>
      <div className="navbar d-flex justify-content-end">
        <button className="rounded-2 me-2" onClick={handlePrint}>
          Print me
        </button>
      </div>
      <CV ref={componentRef} />
    </>
  );
}
