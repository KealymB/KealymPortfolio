import "./Work.css";
import React from "react";
import ReactPlayer from "react-player/file";
import Box from "@material-ui/core/Box";
import promo from "../videos/cropped.mp4";

function Work(props) {
  return (
    <div className="App-header" id="work">
      <Box display="flex">
        <Box></Box>
        <ReactPlayer
          url={promo}
          playing={true}
          loop={true}
          width={200}
          height={450}
          volume={0}
          muted={true}
        />
      </Box>
    </div>
  );
}

export default Work;
