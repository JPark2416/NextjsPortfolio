import React from "react";
import lottieJson from "../../public/animation.json";
import Lottie from "react-lottie-player";

const Animation = () => {
  return <Lottie loop animationData={lottieJson} play />;
};

export default Animation;
