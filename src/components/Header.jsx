import { fullName } from "../data";
import ProfilePic from "../img/profile.jpg";
import About from "./About";
import Contacts from "./Contacts";

export default function Welcome() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center pt-3 px-3 dark-blue">
        <div>
          <h1
            className="text-uppercase lh-1 mb-0 light-text rounded-3"
            style={{ fontSize: "2.9rem" }}
          >
            {fullName}
          </h1>
          <About />
        </div>
        <img class="picture mb-3 rounded-3" src={ProfilePic} />
      </div>
      <Contacts />
    </>
  );
}
