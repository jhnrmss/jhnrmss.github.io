import Education from "./EducationSection";
import HeroSection from "./HeroSection";
import MySkills from "./SkillSection";
import WorkExperience from "./WorkExperienceSection";

function About() {
  return (
    <div>
      <HeroSection />
      <WorkExperience />
      <MySkills />
      <Education />
    </div>
  );
}

export default About;
