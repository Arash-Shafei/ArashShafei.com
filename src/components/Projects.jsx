import bittracker from "../assets/portfolio/bittracker.jpg";
import solesteals from "../assets/portfolio/solesteals.jpg";
import coursepicker from "../assets/portfolio/coursepicker.jpg";
import warzone from "../assets/portfolio/warzone.png";

function Projects() {
  const portfolios = [
    {
      id: 1,
      name: "SoleSteals",
      technologies: "Django, React, Django Rest Framework, Postgresql",
      description:
        "An exclusive sneaker marketplace offering rare finds at below-market prices.",
      src: solesteals,
      codeLink: "https://github.com/Arash-Shafei/",
    },
    {
      id: 2,
      name: "CoursePicker.AI",
      technologies:
        "PySpark, Scikit-Learn, Jupyter Notebook, DBpedia Spotlight",
      description:
        "An application designed to recommend academic courses to students by aligning their interests with available courses, leveraging machine learning models to provide personalized suggestions and enhance their educational experience.",
      src: coursepicker,
      codeLink: "https://github.com/Arash-Shafei/CoursePicker.AI/",
    },
    {
      id: 3,
      name: "Risk Game",
      technologies: "C++",
      description:
        "Strategically conquering the digital realm, one command-line territory at a time with Warzone, the C++ reincarnation of classic Risk.",
      src: warzone,
      codeLink: "https://github.com/Arash-Shafei/Warzone",
    },
    {
      id: 4,
      name: "BitTracker",
      technologies: "React, Node.js",
      description:
        "A cryptocurrency tracking app that allows users to follow the prices of various cryptocurrencies.",
      src: bittracker,
      codeLink: "https://github.com/Arash-Shafei/BitTracker",
    },
    // Add additional project details here...
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-white to-blue-200 w-full text-black py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mb-4">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Projects
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {portfolios.map(
            ({ id, name, technologies, description, src, codeLink }) => (
              <div
                key={id}
                className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8"
              >
                <div
                  className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300"
                  style={{ width: "300px", height: "300px" }}
                >
                  <img
                    src={src}
                    alt="project pic"
                    className="rounded-md"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{name}</h3>
                  <p className="text-md text-gray-600 mb-2">{technologies}</p>
                  <p className="text-gray-800">{description}</p>
                  <a
                    href={codeLink}
                    className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 hover:scale-105 duration-300 border-black duration-300"
                  >
                    View Code
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
