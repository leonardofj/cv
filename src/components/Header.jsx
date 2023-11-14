import { fullName, contact } from "../data";

export default function Welcome() {
  return (
    <>
      <div className="border-bottom  border-dark d-flex justify-content-between align-items-center pt-3">
        <h1 className="text-uppercase lh-1 mb-0" style={{ fontSize: "2.9rem" }}>
          {fullName}
        </h1>
        <span>
          {contact.map((item) => (
            <p className="mb-1 lh-1">
              {item.icon}{" "}
              <a className="link-dark" href={item.href} target="_blank">
                {item.text}
              </a>
            </p>
          ))}
        </span>
      </div>
    </>
  );
}
