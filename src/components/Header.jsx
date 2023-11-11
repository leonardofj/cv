import { fullName, contact } from "../data";

export default function Welcome() {
  return (
    <>
      <div className="container border-bottom  border-dark">
        <div className="row">
          <div className="col-10">
            <h1 className="text-uppercase lh-1" style={{ fontSize: "70px" }}>
              {fullName}
            </h1>
          </div>
          <div className="col">
            {contact.map((item) => (
              <p className="mb-1">
                {item.icon}{" "}
                <a className="link-dark" href={item.href} target="_blank">
                  {item.text}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
