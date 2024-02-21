import { skillSets } from "../../../api/Personal";
import { Badge } from "../../../components/AppBadge/badge";

function MySkills() {
  return (
    <section className="border-b border-gray-300 ">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 py-20">
        <div className="flex items-center justify-center">
          <p className="text-xl font-medium tracking-wider text-gray-700">
            My Skills
          </p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {skillSets.map((skill) => (
            <Badge
              key={skill.label}
              variant={"secondary"}
              className="inline-flex space-x-2 p-4 tracking-wider rounded-md text-base"
            >
              <div>{<skill.icon className={skill.iconStyle} />}</div>
              <p>{skill.label}</p>
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MySkills;
