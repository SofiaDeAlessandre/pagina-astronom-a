import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export function Footer() {
  return (
    <footer id="footer" className="text-center text-white p-6">
      <p>COPYRIGHT SOFIA DE ALESSANDRE </p>
      <div className="flex justify-center gap-2 p-2">
        <a href="https://www.instagram.com/sofia.de.la.luna ">
          <FaInstagram />
        </a>
        <a href="https://github.com/SofiaDeAlessandre ">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sof%C3%ADa-de-alessandre/">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
