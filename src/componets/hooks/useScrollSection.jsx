import { useEffect, useState } from "react";

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;
  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (elementRef) => {
  window.scrollTo({
    // top: elementRef.current.offsetTop - 60,
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
};

const useScrollSection = (aboutRef, skillRef, projectRef, contactRef) => {
  const [navState, setNavState] = useState();

  const sectionRefs = [
    { section: "aboutRef", ref: aboutRef },
    { section: "skillRef", ref: skillRef },
    { section: "projectRef", ref: projectRef },
    { section: "contactRef", ref: contactRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      
      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition >= offsetTop && scrollPosition <= offsetBottom;
        }
      });
      if (selected && selected.section !== navState) {
        setNavState(selected.section);
      }
    };
    window.onscroll = function() {scrollBottomCheck()};

    const scrollBottomCheck = () => {
        const scrollPosition = window.scrollY !== undefined ? window.scrollY : window.pageYOffset;
        const documentHeight = document.body.scrollHeight;
        const viewportHeight = window.innerHeight;

        if (scrollPosition + viewportHeight >= documentHeight) {
            setNavState("contactRef");
        }
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navState]);
  
  return { navState, scrollTo };
};
export default useScrollSection;