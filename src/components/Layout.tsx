import styled from "@emotion/styled";
import { Image } from "antd";
import React from "react";
import tw from "twin.macro";
import CustomButton from "./global/Button";
import Logo from "../assets/images/rmp_logo.png";
import { HeadingText4 } from "./typography/Typography";
import { Route, Switch, useHistory } from "react-router";
import HomePage from "@pages/HomePage";
import AboutPage from "@pages/AboutPage";

const SidebarButton = styled.div`
  ${tw`ml-10 cursor-pointer `}
  transition: all .3s;
  border-bottom: 2px solid #fff;
  &:hover {
    border-bottom: 2px solid black;
  }
`;

const Layout = () => {
  const history = useHistory();

  return (
    <div>
      <div style={{ scrollSnapAlign: "start" }}>
        <div
          className={`px-8 navbar flex justify-between ${
            window.location.pathname.includes("about") ? "shadow-md" : ""
          }`}
          style={{ height: "10vh" }}
        >
          <div className="flex items-center">
            <Image src={Logo} preview={false} height="32px" />
          </div>
          <div className="btn-bar flex items-center">
            <SidebarButton
              onClick={() => history.push("/")}
              className={
                !window.location.pathname.includes("about")
                  ? `border-b-2 border-black`
                  : ""
              }
            >
              <HeadingText4>Home</HeadingText4>
            </SidebarButton>
            <SidebarButton
              onClick={() => history.push("/about")}
              className={
                window.location.pathname.includes("about")
                  ? `border-b-2 border-black`
                  : ""
              }
            >
              <HeadingText4>About us</HeadingText4>
            </SidebarButton>
            <CustomButton
              className="ml-10 px-10"
              onClick={() => history.push("/register")}
            >
              <HeadingText4>Register your business</HeadingText4>
            </CustomButton>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
      </Switch>
    </div>
  );
};

export default Layout;
