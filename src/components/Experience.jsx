import { experience } from "../data";

export default function Experience() {
  return (
    <>
      <div className="col-8 border-end border-dark pe-4">
        <h2 className="text-uppercase fs-1">Relevant Experience</h2>
        {experience.map((item) => (
          <div>
            <div className="d-flex justify-content-between">
              <h4>{item.title}</h4>
              <h4>{item.date}</h4>
            </div>
            {item.company ? (
              <p>
                {item.company} • {item.location}
              </p>
            ) : (
              ""
            )}
            <ul>
              {item.points.map((point) => (
                <li>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
