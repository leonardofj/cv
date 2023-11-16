import { skills } from "../data";

export default function Skills() {
  return (
    <>
      <h3 className="text-uppercase blue-text">Skills</h3>
      <ul className="ps-3 mb-1">
        {skills.map((item) => (
          <li className="lh-sm">{item.join(", ")}</li>
        ))}
      </ul>
    </>
  );
}
