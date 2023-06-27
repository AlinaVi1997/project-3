import { useEffect } from "react";
import Slider from "../Layout/Slider.js";
import sliderOne from "../../src/img/slider-1.jpg";
import sliderSecond from "../../src/img/slider-2.jpg";
import sliderThird from "../../src/img/slider-3.jpg";


let images={
    img: [
      sliderOne,
      sliderSecond,
      sliderThird,
    ]
}
function Life() {
    useEffect(() => {
        document.title = "Life";
    }, []);
    return (
      <div>
          <h1>Life page</h1>
          < Slider {...images} />
      </div>
    )
}
export default Life;