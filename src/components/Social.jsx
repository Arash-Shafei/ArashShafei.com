import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Social() {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="sidebar-links">
          <a
            href="https://www.linkedin.com/in/arashshafei/"
            className="flex justify-between items-center w-full"
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li className="sidebar-links">
          <a href="https://github.com/Arash-Shafei">
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="sidebar-links">
          <a href="mailto:arash_shafei_work@outlook.com">
            Mail <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="sidebar-links">
          <a
            href="/ArashShafei_Resume.pdf"
            download="resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Social;
