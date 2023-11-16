import { description } from "../data";

export default function About() {
  return (
    <>
      <div className="mt-2">
        <p className="lh-sm mb-2 light-text">{description}</p>
      </div>
    </>
  );
}
