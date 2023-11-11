import { skills } from "../data";

export default function Skills() {
  return (
    <>
      <div className="">
        <h2 className="text-uppercase">Skills</h2>
        <ul>
          {skills.map((item) => (
            <li>{item.join(", ")}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
