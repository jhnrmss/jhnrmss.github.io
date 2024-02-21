import Education from "./EducationSection";
import HeroSection from "./HeroSection";
import MySkills from "./SkillSection";
import WorkExperience from "./WorkExperienceSection";

function About() {
  return (
    <div>
      <HeroSection />
      <WorkExperience />
      <Education />
      <MySkills />
    </div>
  );
}

export default About;
