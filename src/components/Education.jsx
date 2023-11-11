import { education } from "../data";

export default function Education() {
  return (
    <>
      <div className="container border-bottom  border-dark">
        <h2 className="text-uppercase fs-1">Education</h2>
        <div className="row">
          {education.map((item) => (
            <div className="col">
              <h4>{item.title}</h4>
              <p>{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
