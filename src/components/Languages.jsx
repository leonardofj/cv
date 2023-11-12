import { languages } from "../data";

export default function Languages() {
  return (
    <>
      <div className="">
        <h3 className="text-uppercase">Languages</h3>
        <ul className="ps-3 mb-1">
          {languages.map((item) => (
            <li className="lh-sm">
              {item.level} {item.language}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
