import { description } from "../data";

export default function About() {
  return (
    <>
      <div className="border-bottom  border-dark mt-2">
        <p className="lh-sm mb-2">{description}</p>
      </div>
    </>
  );
}
