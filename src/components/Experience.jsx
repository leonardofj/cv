import { experience } from "../data";

export default function Experience() {
  return (
    <>
      <div className="col-md-8 py-1 me-1">
        <h3 className="text-uppercase blue-text">Relevant Experience</h3>
        {experience.map((item) => (
          <div>
            <div className="d-flex justify-content-between">
              <h6 className="fw-bold mb-1">{item.title}</h6>
              <h6 className="mb-1">{item.date}</h6>
            </div>
            {item.company ? (
              <p className="lh-1 mb-1">
                {item.company} • {item.location}
              </p>
            ) : (
              ""
            )}
            <ul className="mb-2">
              {item.points.map((point) => (
                <li className="lh-sm">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
