import { Component } from "react";

class ProjectSection extends Component {
  render() {
    return (
      <>
        <section id="#my_projects" className="bg-black text-white py-20 flex flex-grow" style={{ border: "3px red solid" }}>
          <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24" style={{ border: "1px blue solid" }}>
            <div className="flex flex-col w-full lg:w-1/2 justify-center items-start p-8">
              <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
                my_projects:
                </h1>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default ProjectSection;
