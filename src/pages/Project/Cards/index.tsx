import { FaExternalLinkAlt } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";
import progImage from "../../../assets/programming.png";
import { cn } from "../../../utils";
import { dummyData } from "../../../api/Personal";
function ProjectCards() {
  return (
    <div className="grid grid-cols-1 gap-10">
      {dummyData.map((data) => (
        <div key={data.title} className="relative w-full">
          <div
            className={cn(
              "flex  bg-gray-600 max-h-[24rem] md:h-[18rem] md:w-[24rem] md:min-w-[18rem] rounded-md"
            )}
          >
            <img
              src={progImage}
              alt="proj"
              className=" opacity-10 md:opacity-50 md:hover:opacity-100 h-full w-full  rounded-md"
            />
          </div>
          <div
            className={cn(
              "p-6 space-y-6 md:space-y-2  absolute top-0 right-0 text-left md:text-right w-full md:w-3/4 flex flex-col justify-center content-center rounded-md "
            )}
          >
            <div
              className={cn(
                "md:border-r-2 md:border-r-green-700 space-y-1 md:px-2"
              )}
            >
              <p className="text-xs mt-6 md:mt-0 text-green-400 md:text-green-700 tracking-wider font-medium">
                Featured Project
              </p>
              <p className="text-base text-gray-300 md:text-gray-700 tracking-wider font-medium">
                {data.title}
              </p>
            </div>
            <div className="w-full md:p-3 md:bg-slate-100 shadow-md text-gray-300 md:text-gray-700 rounded-md ">
              <p>{data.description}</p>
            </div>
            <div className="space-y-4 md:space-y-2">
              <div
                className={cn("flex justify-start md:justify-end space-x-2")}
              >
                {data.tech.map((techs) => (
                  <p
                    key={techs}
                    className="text-sm text-gray-300 md:text-gray-700 tracking-wider font-medium"
                  >
                    {techs}
                  </p>
                ))}
              </div>
              <div
                className={cn("flex justify-start md:justify-end space-x-3")}
              >
                <TbBrandGithub className="h-5 w-5 text-gray-300 md:text-gray-700" />
                <FaExternalLinkAlt className="h-5 w-5 text-gray-300 md:text-gray-700" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCards;
