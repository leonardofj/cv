import Skills from "./Skills";
import Education from "./Education";
import Languages from "./Languages";
import Others from "./Others";

export default function Side() {
  return (
    <>
      <div className="col ">
        <Skills />
        <Education />
        <Languages />
        <Others />
      </div>
    </>
  );
}
