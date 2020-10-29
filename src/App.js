import './App.css';
import Face from './screens/Face';
import Box from '@material-ui/core/Box';

function App() {
  return (
    <div className="App">
      <Box>
        <Face start={"Hi, I'm "} name={"Kealym Bromley"} end={"I am a React and React-Native developer."}/>
      </Box>
    </div>
  );
}

export default App;
