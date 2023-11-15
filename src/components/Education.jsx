import { education } from "../data";

export default function Education() {
  return (
    <>
      <div className="">
        <h3 className="text-uppercase ">Education</h3>
        <div>
          <h6 className="fw-bold lh-1">{education.title}</h6>
          <p className="lh-1 mb-2">{education.institution}</p>
        </div>
      </div>
    </>
  );
}
