import "./App.css";
import Face from "./screens/Face";
import Work from "./screens/Work";
import Contact from "./screens/Contact";
import Box from "@material-ui/core/Box";

function App() {
  return (
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
  );
}

export default App;
