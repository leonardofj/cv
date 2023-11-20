import { others } from "../data";

export default function Others() {
  return (
    <>
      <h3 className="text-uppercase blue-text">Others</h3>
      <ul className="ps-3 mb-1">
        {others.map((item, index) => (
          <li key={index} className="lh-sm">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
