import { description } from "../data";

export default function About() {
  return (
    <>
      <div className="container border-bottom  border-dark">
        <p>{description}</p>
      </div>
    </>
  );
}
