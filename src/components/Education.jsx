import { education } from "../data";

export default function Education() {
  return (
    <>
      <div className="border-bottom  border-dark mt-1">
        <h3 className="text-uppercase ">Education</h3>
        <div className="d-flex justify-content-between">
          {education.map((item) => (
            <div>
              <h6 className="fw-bold lh-1">{item.title}</h6>
              <p className="lh-1 mb-2">{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
