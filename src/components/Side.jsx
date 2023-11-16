import Skills from "./Skills";
import Education from "./Education";
import Languages from "./Languages";
import Others from "./Others";

export default function Side() {
  return (
    <>
      <div className="col py-2 px-3 light rounded-4 ms-4 mt-1 mb-2">
        <Skills />
        <Education />
        <Languages />
        <Others />
      </div>
    </>
  );
}
