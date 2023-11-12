import { others } from "../data";

export default function Others() {
  return (
    <>
      <div className="">
        <h3 className="text-uppercase">Others</h3>
        <ul className="ps-3 mb-1">
          {others.map((item) => (
            <li className="lh-sm">{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
