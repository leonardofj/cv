import { others } from "../data";

export default function Others() {
  return (
    <>
      <div className="">
        <h2 className="text-uppercase">Others</h2>
        <ul>
          {others.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
