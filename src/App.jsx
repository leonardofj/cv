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
      <div className="container navbar  p-1">
        <button className="rounded-2 ms-2" onClick={handlePrint}>
          Printable version
        </button>
      </div>
      <CV ref={componentRef} />
    </>
  );
}
