// useCarousel.js
import { useRef, useEffect, useState } from "react";
import Glide from "@glidejs/glide";

const useCarousel = (lineItems) => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      new Glide(containerRef.current).mount();
    }
  }, []);

  const groupIntoThrees = (array) => {
    const result = [];
    for (let i = 0; i < array.length; i += 3) {
      result.push(array.slice(i, i + 3));
    }
    return result;
  };

  const generateButtons = (totalGroups) => {
    return Array.from({ length: totalGroups }, (_, index) => (
      <button
        key={index}
        className="glide__bullet"
        data-glide-dir={`=${index}`}
      ></button>
    ));
  };

  const generateControls = () => (
    <>
      <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
        prev
      </button>
      <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
        next
      </button>
    </>
  );

  const groupedItems = isMobile
    ? lineItems.map((item) => [item])
    : groupIntoThrees(lineItems);
  const bullets = generateButtons(
    isMobile ? lineItems.length : groupedItems.length
  );
  const controls = generateControls();

  return { containerRef, groupedItems, bullets, controls };
};

export default useCarousel;
