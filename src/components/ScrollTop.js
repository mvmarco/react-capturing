import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  // everytime we change url, reload the page we scroll top
  // we extract the pathname
  /* 
    check: 
    const location = useLocation();
    console.log(location);

    the following code is equal to: console.log(location.pathname);
  */
  const {pathname} = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

export default ScrollTop;
