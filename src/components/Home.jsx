import profilePic from "../assets/profilePic.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-white to-blue-200"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mr-10">
          <h2 className="text-4xl sm:text-7xl font-bold text-black">
            I'm a Full Stack Developper
          </h2>
          <p className="text-black py-4 max-w-md">
            Graduated with a{" "}
            <span className="font-bold">
              Bachelor's degree in Computer Science at Concordia University in
              May 2023
            </span>{" "}
            and bring{" "}
            <span className="font-bold">
              4 years of software development and design
            </span>{" "}
            experience to the table.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={profilePic}
            alt="my profile pic"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
