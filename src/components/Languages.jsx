import { languages } from "../data";

export default function Languages() {
  return (
    <>
      <h3 className="text-uppercase blue-text">Languages</h3>
      <ul className="ps-3 mb-1">
        {languages.map((item, index) => (
          <li key={index} className="lh-sm">
            {item.level} {item.language}
          </li>
        ))}
      </ul>
    </>
  );
}
