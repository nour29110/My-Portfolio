import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import { useForm, ValidationError } from '@formspree/react';

const Section = (props) => {
    const { children, mobileTop } = props;
  
    return (
      <motion.section
        className={`
    h-screen w-screen p-8 max-w-screen-2xl mx-auto
    flex flex-col items-start
    ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
    `}
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.6,
          },
        }}
      >
        {children}
      </motion.section>
    );
  };
  
  
  export const Interface = (props) => {
    const { setSection } = props;
    return (
      <div className="flex flex-col items-center w-screen">
        <AboutSection setSection={setSection} />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    );
  };
  
  const AboutSection = (props) => {
    const { setSection } = props;
    return (
      <Section mobileTop>
        <h1 className="text-3xl md:text-4xl font-extrabold leading-snug mt-8 md:mt-0">
          Hi, I'm
          <br />
          <span className="bg-gray-100 px-1 italic">Mohamad Nour Alhendi</span>
        </h1>
        <motion.p
          className="text-base md:text-lg font-medium text-black mt-4"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          Computer Science Student at 
          <br />
          Florida State University
        </motion.p>
        <motion.button
          onClick={() => setSection(3)}
          className={`bg-black text-white py-3.5 px-7 
        rounded-lg font-bold text-base md:text-lg mt-4 md:mt-16`}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          Contact me
        </motion.button>
      </Section>
    );
  };
  
  const skills = [
    {
      title: "Python",
      level: 85,
    },
    {
      title: "C++",
      level: 60,
    },
    {
      title: "Nodejs, React, Threejs",
      level: 55,
    },
    {
      title: "Java",
      level: 30,
    },
  ];
  
  const languages = [
    {
      title: "🇸🇦 Arabic",
      level: 100,
    },
    {
      title: "🇺🇸 English",
      level: 99,
    },
    {
      title: "🇩🇪 German",
      level: 40,
    },
  ];
  
  const SkillsSection = () => {
    return (
      <Section>
        <motion.div whileInView={"visible"}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
          <div className=" mt-4 space-y-1">
            {skills.map((skill, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-lg md:text-xl font-bold text-gray-100"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-1">
                  <motion.div
                    className="h-full bg-green-600 rounded-full "
                    style={{ width: `${skill.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mt-6 text-white">Languages</h2>
            <div className=" mt-4 space-y-3">
              {languages.map((lng, index) => (
                <div className="w-64" key={index}>
                  <motion.h3
                    className="text-lg md:text-xl font-bold text-gray-100"
                    initial={{
                      opacity: 0,
                    }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  >
                    {lng.title}
                  </motion.h3>
                  <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                    <motion.div
                      className="h-full bg-green-600 rounded-full "
                      style={{ width: `${lng.level}%` }}
                      initial={{
                        scaleX: 0,
                        originX: 0,
                      }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                            duration: 1,
                            delay: 2 + index * 0.2,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>
    );
  };
  
  const ProjectsSection = () => {
    const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);
  
    const nextProject = () => {
      setCurrentProject((currentProject + 1) % projects.length);
    };
  
    const previousProject = () => {
      setCurrentProject((currentProject - 1 + projects.length) % projects.length);
    };
  
    return (
      <Section>
        <div className="flex w-full h-full gap-8 items-center justify-center">
          <button
            className="hover:text-white transition-colors" style={{ position: 'relative', top: '50px' }}
            onClick={previousProject}
          >
            ← Previous
          </button>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ position: 'relative', top: '50px' }}>Projects</h2>
          <button
            className="hover:text-white transition-colors" style={{ position: 'relative', top: '50px' }}
            onClick={nextProject}
          >
            Next →
          </button>
        </div>
      </Section>
    );
  };

  const ContactSection = () => {
    const [state, handleSubmit] = useForm("mdkkoekr");
    return (
      <Section>
        <h2 className="text-3xl md:text-5xl font-bold">Contact me</h2>
        <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
          {state.succeeded ? (
            <p className="text-gray-900 text-center">Thanks for your message !</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label for="name" className="font-medium text-gray-900 block mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
              />
              <label
                for="email"
                className="font-medium text-gray-900 block mb-1 mt-8"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
              />
              <ValidationError
                className="mt-1 text-red-500"
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <label
                for="email"
                className="font-medium text-gray-900 block mb-1 mt-8"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
              />
              <ValidationError
                className="mt-1 text-red-500"
                errors={state.errors}
              />
              <button
                disabled={state.submitting}
                className="bg-black text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 "
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </Section>
    );
  };