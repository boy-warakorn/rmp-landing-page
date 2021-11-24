import {
  HeadingText2,
  HeadingText3,
  HeadingText4,
} from "@components/typography/Typography";
import React, { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {
  LinkedinOutlined,
  FacebookOutlined,
  GithubOutlined,
} from "@ant-design/icons";

import Boy from "../assets/images/boy.jpeg";
import Ohn from "../assets/images/ohn.jpeg";
import Paint from "../assets/images/paint.jpeg";
import LeftTower from "../assets/images/Tower-1.png";
import RightTower from "../assets/images/tower-3.png";
import BottomTower1 from "../assets/images/Tower-2.png";
import BottomTower2 from "../assets/images/Tower-mini.png";

const DEVELOPERS_TEAMS = [
  {
    img: Boy,
    name: "Warakorn Chantranupong",
    pos: "Fullstack Developer",
    fUrl: "https://www.facebook.com/boykrubb/",
    lUrl: "https://www.linkedin.com/in/warakorn-chantranupong-3305911b7/",
    gUrl: "https://github.com/boy-warakorn",
  },
  {
    img: Paint,
    name: "Anawat Paothong",
    pos: "Mobile Developer",
    fUrl: "https://www.facebook.com/anawat.master",
    lUrl: "https://www.linkedin.com/in/anawat-paothong-a758b41b1/",
    gUrl: "https://github.com/AnawatPaotthong",
  },
  {
    img: Ohn,
    name: "Noppanut Boonrueng",
    pos: "Mobile Developer",
    fUrl: "https://www.facebook.com/onnop.ohnnop",
    lUrl: "https://www.facebook.com/onnop.ohnnop",
    gUrl: "https://www.facebook.com/onnop.ohnnop",
  },
];

const ICON_STYLE = { fontSize: "24px" };

const AboutPage = () => {
  const [leftTower, setLeftTower] = useState(false);
  const [rightTower, setRightTower] = useState(false);
  const [content, setContent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLeftTower(true);
    }, 100);
    setTimeout(() => {
      setRightTower(true);
    }, 300);
    setTimeout(() => {
      setContent(true);
    }, 1200);
  }, []);

  return (
    <div
      className="lg:overflow-hidden xl:px-24 xl:py-6 relative"
      style={{ height: "90vh" }}
    >
      <img
        className="hidden lg:inline-block absolute"
        src={LeftTower}
        alt="background"
        style={{
          left: 0,
          height: "90vh",
          objectFit: "cover",
          transform: leftTower ? "translateX(0)" : "translateX(-600px)",
          transition: "all 2s",
        }}
      />
      <img
        className="hidden lg:inline-block absolute"
        src={BottomTower2}
        alt="background"
        style={{
          bottom: 0,
          height: "90vh",
          objectFit: "cover",
          transform: rightTower ? "translateY(0)" : "translateY(600px)",
          transition: "all 2s",
        }}
      />
      <img
        className="hidden lg:inline-block absolute"
        src={RightTower}
        alt="background"
        style={{
          right: 0,
          bottom: 0,
          height: "90vh",
          transform: leftTower ? "translateX(0)" : "translateX(600px)",
          objectFit: "cover",
          transition: "all 2s",
        }}
      />
      <img
        className="hidden lg:inline-block absolute"
        src={BottomTower1}
        alt="background"
        style={{
          bottom: 0,
          height: "90vh",
          objectFit: "cover",
          transform: rightTower ? "translateY(0)" : "translateY(600px)",
          transition: "all 2s",
        }}
      />
      {content && (
        <ScrollAnimation
          className="h-full w-full shadow-2xl bg-gray-100 px-16 py-12 rounded-lg flex flex-col items-center overflow-y-scroll"
          animateIn="fadeInUp"
        >
          <HeadingText2 className="text-center border-b-2 border-black w-max">
            Our Team
          </HeadingText2>
          <div className=" w-full h-full mt-4 flex justify-between flex-col lg:flex-row">
            {DEVELOPERS_TEAMS.map((dev) => (
              <div className="flex flex-col items-center">
                <div
                  className="rounded-full mt-12 shadow-2xl outline-img"
                  style={{
                    height: "275px",
                    width: "275px",
                    background: `url('${dev.img}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <HeadingText3 className="mt-8">{dev.name}</HeadingText3>
                <HeadingText4>- {dev.pos} -</HeadingText4>
                <HeadingText4 className="mt-2 flex cursor-pointer">
                  <a href={dev.lUrl} target="_blank" rel="noreferrer">
                    <LinkedinOutlined
                      className="mr-2"
                      style={{ ...ICON_STYLE, color: "#3B5998" }}
                    ></LinkedinOutlined>
                  </a>
                  <a href={dev.fUrl} target="_blank" rel="noreferrer">
                    <FacebookOutlined
                      style={{ ...ICON_STYLE, color: "#0E76A8" }}
                    />
                  </a>
                  <a href={dev.gUrl} target="_blank" rel="noreferrer">
                    <GithubOutlined
                      className="ml-2"
                      style={{ ...ICON_STYLE, color: "#171515" }}
                    />
                  </a>
                </HeadingText4>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      )}
    </div>
  );
};

export default AboutPage;
