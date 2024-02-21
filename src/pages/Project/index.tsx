import ProjectCards from "./Cards";

function Projects() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-4xl font-extrabold tracking-wider text-gray-700">
          Projects
        </p>
        <p className="text-base tracking-wider text-gray-600">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study.
        </p>
      </div>
      <div className="space-y-20">
        <ProjectCards />
      </div>
    </div>
  );
}

export default Projects;
