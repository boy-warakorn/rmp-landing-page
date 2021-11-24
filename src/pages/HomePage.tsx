import CustomButton from "@components/global/Button";
import {
  HeadingText1,
  HeadingText3,
  HeadingText4,
  SubHeadingText1,
} from "@components/typography/Typography";
import LandingImage from "../assets/images/mac-landing.jpg";
import MobileObjective from "../assets/images/mobile-objective.png";
import MobileVision from "../assets/images/mobile-vision.png";
import { BackTop } from "antd";
import React, { Fragment } from "react";
import { CheckCircleOutlined, EyeOutlined } from "@ant-design/icons";
import ScrollAnimation from "react-animate-on-scroll";
import { useHistory } from "react-router";

const HomePage = () => {
  const history = useHistory();
  return (
    <Fragment>
      <div
        className="p-10 xl:p-36 2xl:p-56 grid grid-cols-1 content-center relative overflow-hidden"
        style={{ height: "90vh" }}
      >
        <ScrollAnimation
          animateOnce
          animateIn="fadeIn"
          className="w-full lg:w-2/4"
        >
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
        </ScrollAnimation>
        <ScrollAnimation
          offset={-100}
          animateOnce
          animateIn="fadeInRight"
          style={{
            position: "absolute",
            zIndex: -5,
            right: "-17.5vw",
            bottom: "15.5vh",
          }}
        >
          <img
            className="hidden lg:inline-block"
            src={LandingImage}
            alt="background"
            style={{
              width: "60vw",
              objectFit: "cover",
            }}
          />
        </ScrollAnimation>
      </div>

      <div
        style={{
          height: "100vh",
          background: "#3a49f9",
          scrollSnapAlign: "start",
          clipPath: "polygon(0 0, 100% 0, 100% 100vh, 0 75%)",
        }}
        id="objective"
      >
        <div className="flex justify-center items-center h-full px-64">
          <ScrollAnimation animateIn="fadeInLeft" className="lg:ml-12 mt-20">
            <img
              className="hidden lg:inline-block transform -rotate-12"
              src={MobileObjective}
              alt="background"
              style={{
                width: "80%",
                objectFit: "cover",
                zIndex: 5,
              }}
            />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            className="flex flex-col justify-center text-center"
          >
            <CheckCircleOutlined
              style={{ fontSize: "72px" }}
              className="text-white inline-block lg:hidden mb-4"
            />
            <div className="flex items-center justify-center lg:justify-end">
              <CheckCircleOutlined
                style={{ fontSize: "56px" }}
                className="text-white mr-0 lg:mr-4 hidden lg:inline-block"
              />
              <HeadingText1 className="text-white">Easy to manage</HeadingText1>
            </div>
            <div className="flex justify-center lg:justify-end">
              <HeadingText4 className="mt-8 text-white w-2/3 lg:text-right">
                Lorem ipsum sit amet, consectetur adipiscing elit. Purus urna ac
                cras interdum urna facilisis eget nam. Purus nisi in id morbi
                volutpat. Lorem turpis urna id semper.
              </HeadingText4>
            </div>
          </ScrollAnimation>
        </div>
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
          clipPath: "polygon(0 0, 100% 25vh, 100% 125vh, 0 100%)",
        }}
        id="about"
        className="flex flex-col justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex justify-center items-center h-full px-64">
            <ScrollAnimation animateIn="fadeIn" className="flex flex-col">
              <CheckCircleOutlined
                style={{ fontSize: "72px" }}
                className="text-white inline-block lg:hidden mb-4"
              />
              <div className="flex items-center justify-center lg:justify-start">
                <CheckCircleOutlined
                  style={{ fontSize: "56px" }}
                  className="text-white mr-4 hidden lg:inline-block"
                />
                <HeadingText1 className="text-white">
                  Easy to communicate.
                </HeadingText1>
              </div>
              <div className="flex justify-center lg:justify-start">
                <HeadingText4 className="mt-8 text-white w-2/3 text-center lg:text-left">
                  Lorem ipsum sit amet, consectetur adipiscing elit. Purus urna
                  ac cras interdum urna facilisis eget nam. Purus nisi in id
                  morbi volutpat. Lorem turpis urna id semper.
                </HeadingText4>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" className="relative">
              <img
                className="hidden lg:inline-block transform rotate-12 xl:mt-20"
                src={MobileVision}
                alt="backgroundObject"
                style={{
                  width: "70%",
                  objectFit: "cover",
                  zIndex: 5,
                }}
              />
            </ScrollAnimation>
          </div>
        </div>
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
