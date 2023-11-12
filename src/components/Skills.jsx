import { skills } from "../data";

export default function Skills() {
  return (
    <>
      <div className="">
        <h3 className="text-uppercase">Skills</h3>
        <ul className="ps-3 mb-1">
          {skills.map((item) => (
            <li className="lh-sm">{item.join(", ")}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
