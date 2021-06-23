import { Component } from "react";

class SkillsSection extends Component {
  render() {
    return (
      <>
        <section id="#my_projects">
          <div className="bg-black text-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
              <div className="flex flex-col w-full lg:w-1/2 justify-center items-start p-8">
                <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
                  Hello!
                </h1>
                <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                  I'm ALTYKIN,
                </h2>
                <p className="text-sm md:text-base text-gray-50 mb-4">
                  a software engineer and a bug hunter from Philippines.
                </p>
              </div>
              <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-1/2  justify-center">
                <div className="h-48 flex flex-wrap content-center">
                  <div className="justify-center">
                    <img
                      alt="my main pic"
                      className="object-fill w-full"
                      src="./undraw_asset_main.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SkillsSection;
