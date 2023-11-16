import { skills } from "../data";

export default function Skills() {
  return (
    <>
      <h3 className="text-uppercase blue-text">Skills</h3>
      <div className="mb-2">
        {skills.map((category) =>
          category.map((item) => (
            <span className="badge dark-blue light-text me-1">{item}</span>
          ))
        )}
      </div>
    </>
  );
}
