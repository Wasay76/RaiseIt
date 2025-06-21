import React, { useEffect, useState } from "react";
import TopOfHomePage from "../components/topOfHomePage";
import HomeBodyComponents from "../components/bodyComponentsHome";

export default function HomePage() {
  const [yValue, setYvalue] = useState(0);
  useEffect(() => {
    const handle = () => setYvalue(window.scrollY);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <>
      <TopOfHomePage yValue={yValue} />
      <HomeBodyComponents yValue={yValue} />
    </>
  );
}
