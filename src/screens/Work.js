import "./Work.css";
import React from "react";
import Box from "@material-ui/core/Box";

import ReactPlayer from "react-player/file";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import promo from "../videos/cropped.mp4";

import mock1 from "../images/Bridge-1.jpg";
import mock2 from "../images/Bridge-2.jpg";
import mock3 from "../images/Bridge-3.jpg";
import mock4 from "../images/Bridge-4.jpg";
import mock5 from "../images/Bridge-5.jpg";
import mock6 from "../images/Bridge-6.jpg";

function Work(props) {
  const w = 190;
  return (
    <div className="App-header" id="work">
      <Box alignSelf="flex-start">
        <header className="Header">My work</header>
      </Box>
      <p3 className="Intro">
        My latest work was an events finding, booking and viewing app. I
        completed the app in a month and a half. Seen below are the mock screens
        and final product. At the end the user could rate, comment on and show
        interest in events.
      </p3>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box width={300} margin={5}>
          <AwesomeSlider className="slider">
            <div>
              <img src={mock1} width={w} alt="ms1" />
            </div>
            <div>
              <img src={mock2} width={w} alt="ms2" />
            </div>
            <div>
              <img src={mock3} width={w} alt="ms3" />
            </div>
            <div>
              <img src={mock4} width={w} alt="ms4" />
            </div>
            <div>
              <img src={mock5} width={w} alt="ms5" />
            </div>
            <div>
              <img src={mock6} width={w} alt="ms6" />
            </div>
          </AwesomeSlider>
        </Box>
        <Box margin={5}>
          <ReactPlayer
            url={promo}
            playing={true}
            loop={true}
            width={280}
            height={430}
            volume={0}
            muted={true}
          />
        </Box>
      </Box>
    </div>
  );
}

export default Work;
