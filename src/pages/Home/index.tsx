import progImage from "../../assets/programming.jpg";
import { Button } from "../../components/AppButton/button";
import resume from "../../assets/john-romie-resume.pdf";
import { useNavigate } from "react-router";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className=" flex flex-col">
        <div className="space-y-1">
          <p className="text-base text-green-700 tracking-wider font-medium">
            Hi, my name is
          </p>
          <p className="text-4xl font-extrabold tracking-wider text-gray-700">
            John Romie Reyes.
          </p>
          <p className="text-4xl  font-extrabold tracking-wider text-gray-500">
            I create web-based projects.
          </p>
        </div>
        <div className="space-y-4 my-4">
          <p className="text-base tracking-wider text-gray-600">
            {" "}
            I&apos;m a Software Engineer living in the Philippines. specializing
            in building Web Applications that leads to the success of the
            overall product.
          </p>
          <p className="text-base tracking-wider text-gray-600">
            Want to know more about me?
          </p>
        </div>
        <div className="-ml-2">
          <Button className="m-2" onClick={() => navigate("/about")}>
            Visit About Page
          </Button>
          <a href={resume} download="John-Romie-Reyes-CV">
            <Button variant={"outline"} className="m-2">
              Download my CV
            </Button>
          </a>
        </div>
      </div>
      <div className="flex items-center mt-6 lg:mt-0">
        <img src={progImage} alt="Programming" className="w-auto h-auto" />
      </div>
    </div>
  );
}

export default Home;
