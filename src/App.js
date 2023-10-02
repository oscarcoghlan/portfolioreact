import { Helmet } from "react-helmet";
import logo from './logo.svg';
import About from "./components/About.js";
import Landing from "./components/Landing.js";
import Scripts from "./Scripts/Scripts.js";

function App() {
  return (
    <div className="App bg-black text-gray-400 body-font">
      <Helmet>
        <link href="/styles.css" rel="stylesheet" />
      </Helmet>
      <Landing />
      <About />
      <Scripts />
    </div>
  );
}

export default App;
