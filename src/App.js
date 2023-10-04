import { Helmet } from "react-helmet";
import logo from './logo.svg';
import About from "./components/About.js";
import Landing from "./components/Landing.js";
import Loadscripts from "./Scripts/Loadscripts.js";
import Project from "./components/Project";

function App() {
  return (
    <div className="App bg-black text-gray-200">
      <Helmet>
        <link href="/styles.css" rel="stylesheet" />
        <title>Oscar Coghlan - Portfolio</title>
      </Helmet>
      <Landing />
      <About />
      <Project 
         heading={"About me"}
         content={`I'm Oscar, a dedicated software engineering student focused on delivering innovative solutions. On this portfolio website, I share my skills, projects, and experiences.\n
              From an early age, I've been intrigued by the possibilities of software engineering. I find fulfillment in creating elegant and efficient solutions to complex challenges, combining creativity and problem-solving. As a student, I actively pursue opportunities for growth and contribution in this ever-evolving field.\n
              I am currently completing a degree in software engineering, and have developed a strong foundation in programming languages, data structures, algorithms, and software design principles. I have extended many classes with Java, wrestled with the c++ standard library, and returned back to the basics with c. I've dipped my toes into .NET, and I've learnt how to express myself on the internet with PHP. I'm consistently curious about exploring new and old technologies.\n
              Beyond academia, I thrive in collaborative environments, valuing effective communication and a positive impact. Approachable and enthusiastic, I appreciate diverse perspectives and eagerly contribute my own ideas. I am actively seeking meaningful opportunities to apply my skills, expand my expertise as a software engineer.\n`}
         bgcolor={"bg-slate-900"}
         align={'left'}
      />
      <Project 
         heading={"This is heading"}
         content={"This is content"}
         bgcolor={"bg-slate-700"}
         align={'left'}
      />
      <Loadscripts />
    </div>
  );
}

export default App;
