import { languages } from "../data";

export default function Languages() {
  return (
    <>
      <div className="">
        <h2 className="text-uppercase">Languages</h2>
        <ul>
          {languages.map((item) => (
            <li>
              {item.level} {item.language}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
