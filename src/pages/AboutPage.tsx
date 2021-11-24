import {
  HeadingText2,
  HeadingText3,
  HeadingText4,
} from "@components/typography/Typography";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {
  LinkedinOutlined,
  FacebookOutlined,
  GithubOutlined,
} from "@ant-design/icons";

import Boy from "../assets/images/boy.jpeg";
import Ohn from "../assets/images/ohn.jpeg";
import Paint from "../assets/images/paint.jpeg";

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
    gUrl: "https://www.facebook.com/onnop.ohnnop",
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
  return (
    <div
      className="lg:overflow-hidden xl:px-24 xl:py-6"
      style={{ height: "90vh" }}
    >
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
    </div>
  );
};

export default AboutPage;
