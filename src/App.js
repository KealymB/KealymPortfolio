import "./App.css";
import Face from "./screens/Face";
import Work from "./screens/Work";
import Contact from "./screens/Contact";
import Box from "@material-ui/core/Box";
import { Parallax } from "react-parallax";
import bg from "./images/background.png";

function App() {
  return (
    <Parallax blur={0} bgImage={bg} bgImageAlt="stars" strength={2000}>
      <div>
        <Box>
          <Face
            start={"Hi, I'm "}
            name={"Kealym Bromley"}
            end={"I am a React and React-Native developer."}
          />
          <Work />
          <Contact />
        </Box>
      </div>
    </Parallax>
  );
}

export default App;
