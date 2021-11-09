import styled from "@emotion/styled";
import { BackTop, Image } from "antd";
import React from "react";
import tw from "twin.macro";
import CustomButton from "./global/Button";
import LandingImage from "../assets/images/landing-img.png";
import Logo from "../assets/images/rmp_logo.png";
import ScrollAnimation from "react-animate-on-scroll";
import {
  HeadingText1,
  HeadingText3,
  HeadingText4,
  SubHeadingText1,
} from "./typography/Typography";
import { AimOutlined, EyeOutlined, HomeOutlined } from "@ant-design/icons";

const SidebarButton = styled.div`
  ${tw`ml-10 cursor-pointer `}
  transition: all .3s;
  border-bottom: 2px solid #fff;
  &:hover {
    border-bottom: 2px solid black;
  }
`;

const Layout = () => {
  return (
    <div>
      <div style={{ scrollSnapAlign: "start" }}>
        <div
          className="px-8 navbar flex justify-between"
          style={{ height: "10vh" }}
        >
          <div className="flex items-center">
            <Image src={Logo} preview={false} height="32px" />
          </div>
          <div className="btn-bar flex items-center">
            <SidebarButton>
              <HeadingText4>
                <a href="#objective" style={{ color: "black" }}>
                  Our objective
                </a>
              </HeadingText4>
            </SidebarButton>
            <SidebarButton>
              <HeadingText4>
                <a href="#vision" style={{ color: "black" }}>
                  Our vision
                </a>
              </HeadingText4>
            </SidebarButton>
            <SidebarButton>
              <HeadingText4>
                <a href="#about" style={{ color: "black" }}>
                  About us
                </a>
              </HeadingText4>
            </SidebarButton>
            <CustomButton className="ml-10 px-10">
              <HeadingText4>Register your business</HeadingText4>
            </CustomButton>
          </div>
        </div>

        <div
          className="p-56 grid grid-cols-2 content-center"
          style={{ height: "90vh" }}
        >
          <div>
            <HeadingText1 className="leading-normal">
              Start your business with
              <br /> Resident Management System!
            </HeadingText1>
            <HeadingText3 className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              lacinia nulla tempus est mauris orci, viverra quis. Volutpat
              tempus euismod convallis commodo, ultrices nulla. Non facilisis
              semper molestie tortor.
            </HeadingText3>
            <CustomButton className="mt-12 px-10">
              <HeadingText4>Register</HeadingText4>
            </CustomButton>
          </div>
          <div
            className="flex items-center justify-center"
            style={{ marginTop: "-7.5vh" }}
          >
            <Image
              src={LandingImage}
              preview={false}
              style={{ height: "50vh" }}
            />
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Layout;
