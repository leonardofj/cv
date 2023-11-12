import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Side from "./components/Side";

export default function App() {
  return (
    <>
      <div className="container mt-3 bg-light" style={{ width: "700px" }}>
        <Header />
        <About />
        <Education />
        <div className="row mt-2">
          <Experience />
          <Side />
        </div>
      </div>
    </>
  );
}
