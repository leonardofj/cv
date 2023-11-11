import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Side from "./components/Side";

export default function App() {
  return (
    <>
      <div className="container mt-3 bg-light">
        <Header />
        <br />
        <About />
        <br />
        <Education />
        <br />
        <div className="container">
          <div className="row">
            <Experience />
            <Side />
          </div>
        </div>
      </div>
    </>
  );
}
