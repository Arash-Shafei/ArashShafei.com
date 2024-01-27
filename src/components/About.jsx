import coencorp from "../assets/coencorp.jpg";

function About() {
  const experience = [
    {
      id: 1,
      src: coencorp,
      company: "COENCORP",
      location: "Brossard, Quebec",
      position: "Information Technology Analyst",
      tasks:
        "Deploy, configure, and update software in the cloud. Diagnose and resolve simple and complex technical problems.  Analyze incidents and provide input for continuous system and process improvement",
      period: "Aug 2023 - Present",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-blue-200 to-white w-full text-black md:h-screen py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mb-4">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Professional Experience
          </p>
        </div>

        <div className="grid grid-cols-1 w-80 gap-8 px-12 sm:px-0">
          {experience.map(
            ({ id, src, company, location, position, tasks, period }) => (
              <div>
                <div
                  key={id}
                  className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300"
                >
                  <img
                    src={src}
                    alt="project pic"
                    className="rounded-md object-cover"
                  />
                </div>
                <div>
                  <br />
                  <p className="font-bold">{company}</p>
                  <p>{location}</p>
                  <p>{period}</p>
                  <br />
                  <p className="font-bold">{position}</p>
                  <br />
                  <p>{tasks}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
