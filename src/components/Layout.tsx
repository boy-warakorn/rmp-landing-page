import styled from "@emotion/styled";
import { Image } from "antd";
import React from "react";
import tw from "twin.macro";
import CustomButton from "./global/Button";
import Logo from "../assets/images/rmp_logo.png";
import { HeadingText4 } from "./typography/Typography";
import { Route, Switch, useHistory } from "react-router";
import HomePage from "@pages/HomePage";

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
            <CustomButton className="ml-10 px-10" onClick={() => {}}>
              <HeadingText4 onClick={() => history.push("/register")}>
                Register your business
              </HeadingText4>
            </CustomButton>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  );
};

export default Layout;
