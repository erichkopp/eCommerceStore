import React, { useState, useEffect } from "react";
import img01 from "../img/homePageImages/img01.jpeg";

export default function HomePageScrollEffects() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollingDown, setScrollingDown] = useState();
  const [imgPosition, setImgPosition] = useState();
  const [imgHeight, setImgHeight] = useState();
  const [stopGrow, setStopGrow] = useState(false);
  const [fixed, setFixed] = useState(false);
  const img01Ref = React.createRef();

  // SET INITIAL IMAGE POSITION
  useEffect(() => {
    let imgDistanceToTop =
      window.pageYOffset + img01Ref.current.getBoundingClientRect().top;
    setImgPosition(imgDistanceToTop);

    let imgHeight = img01Ref.current.getBoundingClientRect().height;
    setImgHeight(imgHeight);
  }, []);

  // GET IMAGE POSITION ON WINDOW RESIZE
  useEffect(() => {
    const handleResize = () => {
      if (img01Ref.current) {
        let imgDistanceToTop =
          window.pageYOffset + img01Ref.current.getBoundingClientRect().top;
        setImgPosition(imgDistanceToTop);
      }
      if (img01Ref.current) {
        let imgHeight = img01Ref.current.getBoundingClientRect().height;
        setImgHeight(imgHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // HANDLE SCROLLING EVENT
  useEffect(() => {
    const handleScroll = () => {
      if (
        imgHeight + (window.scrollY - imgPosition) / 4 >=
        window.innerHeight - 50
      ) {
        setStopGrow(true);
      }

      // SET SCROLLING UP OR DOWN
      if (scrollPosition - window.scrollY < 0) {
        setScrollPosition(window.scrollY);
        setScrollingDown(true);
      } else {
        setScrollPosition(window.scrollY);
        setScrollingDown(false);
        setStopGrow(false);
      }

      // GROW IMAGE TO FILL PAGE
      if (window.scrollY >= imgPosition - 50 && scrollingDown) {
        setFixed(true);
      } else if (window.scrollY >= imgPosition && !scrollingDown) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <div>DISCOVER THE JOY OF ANALOG FILM PHOTOGRAPHY</div>
      <div className="homePageScrollEffects">
        <img
          className="img01"
          src={img01}
          ref={img01Ref}
          alt="01"
          style={{
            position: fixed ? "fixed" : "unset",
            top: fixed ? "50px" : "",
            maxHeight: `${window.innerHeight - 50}px`,
            minHeight: stopGrow ? `${window.innerHeight - 50}px` : "",
            height:
              fixed &&
              !stopGrow &&
              imgHeight + (window.scrollY - imgPosition) / 4 <=
                window.innerHeight - 50
                ? `${imgHeight + (window.scrollY - imgPosition) / 4}px`
                : { imgHeight }
          }}
        />
      </div>
    </>
  );
}
