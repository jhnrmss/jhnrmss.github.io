import { FaExternalLinkAlt } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";
import progImage from "../../../assets/programming.png";
import { cn } from "../../../utils";
export const dummyData = [
  {
    title: "Sample Project",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    tech: ["ReactJS", "Tailwind", "TypeScript"],
  },
  {
    title: "Sample Project 2",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    tech: ["ReactJS", "Tailwind", "TypeScript"],
  },
  {
    title: "Sample Project 3",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    tech: ["ReactJS", "Tailwind", "TypeScript"],
  },
];
function ProjectCards() {
  return (
    <>
      {dummyData.map((data, index) => (
        <div key={data.title} className="relative w-full">
          <div
            className={cn(
              (index + 1) % 2 === 0 ? "flex justify-end" : "",
              "w-full"
            )}
          >
            <div className={cn("bg-green-200  h-auto w-[60%] rounded-md")}>
              <img
                src={progImage}
                alt="proj"
                className=" opacity-50 hover:opacity-100 h-[18rem] w-full rounded-md"
              />
            </div>
          </div>
          <div
            className={cn(
              (index + 1) % 2 !== 0
                ? "absolute top-0 right-0 text-right "
                : "absolute top-0 left-0 text-left",
              " w-1/2 rounded-md space-y-2 "
            )}
          >
            <div
              className={cn(
                (index + 1) % 2 !== 0
                  ? "border-r-2 border-r-green-700"
                  : "border-l-2 border-l-green-700",
                "space-y-1 mb-6  px-4"
              )}
            >
              <p className="text-xs text-green-700 tracking-wider font-medium">
                Featured Project
              </p>
              <p className="text-base text-gray-700 tracking-wider font-medium">
                {data.title}
              </p>
            </div>
            <div className="w-full bg-slate-100 shadow-md p-4 text-gray-700 rounded-md ">
              <p>{data.description}</p>
            </div>
            <div className="space-y-2">
              <div
                className={cn(
                  (index + 1) % 2 !== 0
                    ? "flex justify-end"
                    : "flex justify-start",
                  "space-x-2"
                )}
              >
                {data.tech.map((techs) => (
                  <p
                    key={techs}
                    className="text-sm text-gray-700 tracking-wider font-medium"
                  >
                    {techs}
                  </p>
                ))}
              </div>
              <div
                className={cn(
                  (index + 1) % 2 !== 0
                    ? "flex justify-end"
                    : "flex justify-start",
                  "space-x-3"
                )}
              >
                <TbBrandGithub className="h-5 w-5 text-gray-700" />
                <FaExternalLinkAlt className="h-5 w-5 text-gray-700" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectCards;
