import Skills from "./Skills";
import Languages from "./Languages";
import Others from "./Others";

export default function Side() {
  return (
    <>
      <div className="col ms-2">
        <Skills />
        <Languages />
        <Others />
      </div>
    </>
  );
}
