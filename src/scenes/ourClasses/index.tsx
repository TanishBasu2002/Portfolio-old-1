import { SelectedPage, ProjectType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Project from "./Class";

const projects: Array<ProjectType> = [
  {
    name: "Todo List",
    description: "This is a Simple To-Do List using EJS as Frontend, Node.js as Backend and MongoDB as Database.",
    link:"https://tanish-to-do-list.onrender.com",
    image: image1,
  },
  {
    name: "Blog Website",
    description: "This is a Simple To-Do List using EJS as Frontend, Node.js as Backend and MongoDB as Database.",
    link:"https://blog-with-database.onrender.com",
    image: image2,
  },
  {
    name: "Recreation Of a 3D Website",
    description:
      "This is a recreation of Bokoko33's award-winning website using React,Three.js nd 3D models.",
    link:"https://tanish-basu.netlify.app",
    image: image3,
  },
  {
    name: "Real Estate App",
    description:
      "This is a Real Estate App for Buying and selling Properties Using React,Redux,Typescript,MUI for frontend ,Node.js,Express.js for backend and MongoDb as Database.",
    link:"https://real-estate-tanish.netlify.app",
    image: image4,
  },
  /**{
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  }, */
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>My Projects</HText>
            <p className="py-5">
              See my Projects which I made using various technologies such as HTML,CSS,JavaScript,Node.js,
              EJS,JQuery,Angular,
              React,NEXt.js,MongoDB,Firebase etc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {projects.map((item: ProjectType, index) => (
              <Project
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
                link={item.link}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
