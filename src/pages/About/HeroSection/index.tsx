import { Avatar, AvatarImage } from "../../../components/AppAvatar";
import meImage from "../../../assets/me.jpg";
import { IoMdArrowDropright } from "react-icons/io";
export const technologies = [
  "JavaScript (ES6+)",
  "ReactJS",
  "Golang",
  "TypeScript",
  "Tailwind",
  "Supabase Gotrue",
];
function HeroSection() {
  return (
    <section className="border-b border-gray-300 pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
        <div className=" flex flex-col space-y-4 ">
          <p className="text-4xl font-extrabold tracking-wider text-gray-700">
            Get to know me!
          </p>
          <p className="text-base tracking-wider text-gray-600">
            Hi there! I&apos;m John Romie, and I love creating stuff for the
            internet. Back in 2021, my college instructor challenged us to build
            a website using templates. Turns out, learning from a pro taught me
            a ton about HTML & CSS!
          </p>
          <p className="text-base tracking-wider text-gray-600">
            Fast-forward to 2022, and I&apos;ve been lucky enough to work at
            Hooli Software, where I focus on making user-friendly web apps for
            various clients.
          </p>
          <p className="text-base tracking-wider text-gray-600">
            I&apos;m open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don&apos;t hesitate to contact me.
          </p>
          <p className="text-base tracking-wider text-gray-600">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <div className="grid grid-cols-2">
            {technologies.map((tech) => (
              <span key={tech} className="inline-flex items-center">
                <IoMdArrowDropright className="text-green-700" />
                <p className="text-base tracking-wider text-gray-600">{tech}</p>
              </span>
            ))}
          </div>
        </div>
        <div className=" items-center justify-center mt-6 lg:mt-0 hidden sm:flex">
          <Avatar className="h-[16rem] w-auto outline-8 outline-double outline-offset-4 outline-green-700 ">
            <AvatarImage src={meImage} alt="me" />
          </Avatar>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
