import CustomButton from "@components/global/Button";
import {
  HeadingText1,
  HeadingText3,
  HeadingText4,
  SubHeadingText1,
} from "@components/typography/Typography";
import LandingImage from "../assets/images/mac-landing.jpg";
import { BackTop } from "antd";
import React, { Fragment } from "react";
import { AimOutlined, EyeOutlined, HomeOutlined } from "@ant-design/icons";
import ScrollAnimation from "react-animate-on-scroll";
import { useHistory } from "react-router";

const HomePage = () => {
  const history = useHistory();
  return (
    <Fragment>
      <div
        className="p-10 xl:p-56 grid grid-cols-1 content-center relative overflow-hidden"
        style={{ height: "90vh" }}
      >
        <div style={{ width: "40vw" }} className="w-full lg:w-2/4">
          <HeadingText1 className="leading-normal">
            Start your business with
            <br /> Resident Management System!
          </HeadingText1>
          <HeadingText3 className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            lacinia nulla tempus est mauris orci, viverra quis. Volutpat tempus
            euismod convallis commodo, ultrices nulla. Non facilisis semper
            molestie tortor.
          </HeadingText3>
          <CustomButton
            className="mt-12 px-10"
            onClick={() => history.push("/register")}
          >
            <HeadingText4>Register</HeadingText4>
          </CustomButton>
        </div>
        {/* <div
          className="flex items-center justify-center"
          style={{ marginTop: "-7.5vh" }}
        ></div> */}
      </div>

      <img
        className="hidden lg:inline-block"
        src={LandingImage}
        alt="background"
        style={{
          height: "50vh",
          objectFit: "cover",
          position: "absolute",
          zIndex: -5,
          right: "2.5vw",
          bottom: "21.5vh",
        }}
      />
      <div
        style={{
          height: "100vh",
          background: "#3a49f9",
          scrollSnapAlign: "start",
          clipPath: "polygon(0 0, 100% 0, 100% 75vh, 0 100%)",
        }}
        id="objective"
      >
        <ScrollAnimation
          animateIn="fadeIn"
          offset={500}
          className="flex flex-col justify-center items-center h-full"
        >
          <AimOutlined style={{ fontSize: "100px", color: "#fff" }} />
          <HeadingText1 className="text-white mt-12">
            Our objective
          </HeadingText1>
          <HeadingText4 className="mt-8 w-1/3 text-center text-white">
            Lorem ipsum sit amet, consectetur adipiscing elit. Purus urna ac
            cras interdum urna facilisis eget nam. Purus nisi in id morbi
            volutpat. Lorem turpis urna id semper.
          </HeadingText4>
        </ScrollAnimation>
      </div>
      <div
        style={{
          height: "100vh",
          scrollSnapAlign: "center",
          marginTop: "-25vh",
        }}
        id="vision"
      >
        <ScrollAnimation
          offset={500}
          animateIn="fadeIn"
          className="flex flex-col justify-center items-center h-full"
        >
          <EyeOutlined style={{ fontSize: "100px" }} />
          <HeadingText1 className="mt-12">Our vision</HeadingText1>
          <HeadingText4 className="mt-8 w-1/3 text-center">
            Lorem ipsum sit amet, consectetur adipiscing elit. Purus urna ac
            cras interdum urna facilisis eget nam. Purus nisi in id morbi
            volutpat. Lorem turpis urna id semper.
          </HeadingText4>
        </ScrollAnimation>
      </div>
      <div
        style={{
          height: "100vh",
          marginTop: "-25vh",
          background: "#3a49f9",
          scrollSnapAlign: "start",
          clipPath: "polygon(0 25vh, 100% 0, 100% 125vh, 0 100%)",
        }}
        id="about"
        className="flex flex-col justify-center items-center"
      >
        <ScrollAnimation
          animateIn="fadeIn"
          offset={500}
          className="flex flex-col justify-center items-center h-full"
        >
          <HomeOutlined style={{ fontSize: "100px", color: "#fff" }} />
          <HeadingText1 className="text-white mt-12">About us</HeadingText1>
          <HeadingText4 className="mt-8 w-1/3 text-center text-white">
            Lorem ipsum sit amet, consectetur adipiscing elit. Purus urna ac
            cras interdum urna facilisis eget nam. Purus nisi in id morbi
            volutpat. Lorem turpis urna id semper.
          </HeadingText4>
        </ScrollAnimation>
      </div>
      <div
        style={{
          height: "30vh",
          background: "#4022B6",
          color: "#fff",
          scrollSnapAlign: "center",
        }}
        className="flex flex-col justify-center items-center"
      >
        <SubHeadingText1>
          © 2021 RMP Platform, All rights reserved.
        </SubHeadingText1>
      </div>
      <BackTop></BackTop>
    </Fragment>
  );
};

export default HomePage;
