import { Component } from "react";
import WhoAmISection from "./sections/WhoAmISection";
import ProjectSection from "./sections/ProjectSection";
import SkillsSection from "./sections/SkillsSection";

class SectionRoot extends Component {
  render() {
    return (
      <>
        <WhoAmISection />
        <ProjectSection />
        <SkillsSection />
      </>
    );
  }
}

export default SectionRoot;
