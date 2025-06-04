import React, { useEffect, useState } from "react";
import android from "../../assets/Android Download Button.svg";
import ios from "../../assets/Apple Download Button.svg";
import mask1 from "../../assets/mask1.svg";
import mask2 from "../../assets/mask2.svg";
import mask3 from "../../assets/mask3.svg";
import mask4 from "../../assets/mask4.svg";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Catalog = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3.7,
      spacing: 10,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 30 },
      },
    },
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        ref={isMobile ? sliderRef : null}
        className={`${
          isMobile ? "keen-slider" : "flex gap-x-[35px]"
        } items-center justify-center md:mx-[50px] mt-20`}
      >
        {[mask1, mask2, mask3, mask4].map((mask, index) => (
          <div key={index} className="keen-slider__slide">
            <img src={mask} alt={`mask${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-x-[14px] my-10 items-center ">
        <img src={android} alt="" />
        <img src={ios} alt="" />
      </div>
    </>
  );
};

export default Catalog;
