import {
  HeadingText1,
  HeadingText3,
  HeadingText4,
} from "@components/typography/Typography";
import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router";
import SuccessImage from "../assets/images/success.jpg";

const SuccessPage = () => {
  const history = useHistory();

  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <img
        src={SuccessImage}
        alt="background"
        style={{
          height: "50vh",
          objectFit: "cover",
        }}
      />
      <HeadingText1 className="text-green-500">Success !</HeadingText1>
      <HeadingText3 className="mt-4">
        Our Web application link will be sent to your registered email!
      </HeadingText3>
      <Button
        type="primary"
        className="mt-8"
        onClick={() => history.replace("")}
      >
        <HeadingText4>Back to home</HeadingText4>
      </Button>
    </div>
  );
};

export default SuccessPage;
