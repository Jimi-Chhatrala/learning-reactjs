import React from "react";
import image1 from "./images/image1.jpg";

function ImagesDemo() {
  return (
    <>
      <div>Images Demo</div>
      <img src={image1} alt="image1" height="200" width="200" />
      <img
        src={require("./images/image2.jpg")}
        alt="image2"
        height="200"
        width="200"
      />
      {/* If Not Work then add default */}
      {/* <img
        src={require("./images/image1.jpg").default}
        alt="image1"
        height="200"
        width="200"
      /> */}
      <img src="images/image3.jpg" alt="image3" width="200" height="200" />
    </>
  );
}

export default ImagesDemo;
