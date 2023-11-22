import Skills from "./Skills";
import Education from "./Education";
import Languages from "./Languages";
import Others from "./Others";

export default function Sidebar() {
  return (
    <div className="col-md">
      <div className="py-2 px-2 light rounded-4 mt-1 mb-2">
        <Skills />
        <Education />
        <Languages />
        <Others />
      </div>
    </div>
  );
}
