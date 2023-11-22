import { fullName } from "../data";
import ProfilePic from "../img/profile.jpg";
import About from "./About";
import Contacts from "./Contacts";

export default function Welcome() {
  return (
    <>
      <div className="d-md-flex justify-content-between align-items-center pt-3 px-3 dark-blue">
        <div>
          <h1
            className="name text-uppercase lh-1 mb-0 light-text rounded-3"
            style={{ fontSize: "2.9rem" }}
          >
            {fullName}
          </h1>
          <About />
        </div>
        <img
          className="picture mb-3 rounded-3 d-print-none"
          src={ProfilePic}
          alt="Profile picture"
        />
      </div>
      <Contacts />
    </>
  );
}
