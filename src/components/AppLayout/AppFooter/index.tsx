import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

function AppFooter() {
  return (
    <footer aria-labelledby="footer-heading" className="mt-20">
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8 ">
        <div className="flex space-x-2 items-center justify-center">
          <a href="https://www.facebook.com/Romie55/">
            <FaFacebookSquare className="h-8 w-8 text-gray-800" />
          </a>
          <a href="https://www.linkedin.com/in/john-romie-reyes-2a8226229/">
            <FaLinkedin className="h-8 w-8 text-gray-800" />
          </a>
          <a href="https://github.com/jhnrmss">
            <FaGithub className="h-8 w-8 text-gray-800" />
          </a>
        </div>
        <div className="text-center border-t tracking-wider border-white/10 pt-8 ">
          <p className="text-base leading-5 text-gray-600">
            &copy; 2024 Copyright: jhnrmss
          </p>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
