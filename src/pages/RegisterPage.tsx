import {
  HeadingText1,
  HeadingText2,
  HeadingText4,
} from "@components/typography/Typography";
import { Image, Steps, Form, Input, InputNumber } from "antd";
import ShakeHandImage from "../assets/images/shake_hand.png";
import React, { Fragment, useState } from "react";
import { LeftCircleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import CustomButton from "@components/global/Button";
import { useForm } from "antd/lib/form/Form";
import { AxiosService } from "@services/axios.config";
import Loading from "react-loading";

const { Step } = Steps;

const RegisterPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [firstFormValue, setFirstFormValue] = useState({} as any);
  const history = useHistory();
  const form = useForm();

  const renderFirstStep = () => (
    <Fragment>
      <Form.Item
        label="Business Name"
        name="businessName"
        rules={[
          {
            required: true,
            message: "Please input your business name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      {/* <Form.Item
        label="Common Charge Ratio"
        name="commonChargeRatio"
        rules={[
          {
            required: true,
            message: "Please input your common charge ratio!",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        label="Base Common Charge"
        name="baseCommonCharge"
        rules={[
          {
            required: true,
            message: "Please input your base common charge!",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item> */}
      <Form.Item
        className="col-span-2"
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: "Please input your address!",
          },
        ]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>
    </Fragment>
  );

  const renderSecondStep = () => (
    <Fragment>
      <Form.Item
        label="Firstname"
        name="firstname"
        rules={[{ required: true, message: "Please input your firstname!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Lastname"
        name="lastname"
        rules={[{ required: true, message: "Please input your lastname!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Citizen Number"
        name="citizenNumber"
        rules={[{ pattern: RegExp("^[0-9]{13}$"), required: true }]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[{ pattern: RegExp("^[0][0-9]{9}$"), required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ type: "email", required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
    </Fragment>
  );

  const onSubmit = async () => {
    await form[0].validateFields();
    if (currentStep === 0) {
      setFirstFormValue(form[0].getFieldsValue());
      setCurrentStep(1);
    } else {
      console.log(form[0].getFieldsValue());
      console.log(firstFormValue);

      const formValue = form[0].getFieldsValue();

      const preparedData = {
        name: firstFormValue?.businessName,
        commonChargeRatio: "123",
        baseCommonCharge: "1000",
        address: firstFormValue?.address,
        firstname: formValue?.firstname,
        lastname: formValue?.lastname,
        citizenNumber: formValue?.citizenNumber,
        phoneNumber: formValue?.phoneNumber,
        email: formValue?.email,
        password: formValue?.password,
      };

      try {
        setLoading(true);
        await AxiosService.post("/business", preparedData);
        history.replace("/");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Fragment>
      <div
        className="py-8 px-24 flex items-center cursor-pointer"
        onClick={() => history.goBack()}
      >
        <LeftCircleOutlined style={{ fontSize: "24px" }} />
        <HeadingText2 className="ml-4">Back</HeadingText2>
      </div>
      <div
        className="grid grid-cols-3 p-0 2xl:py-8 2xl:px-24"
        style={{ height: "calc(100vh - 96px)" }}
      >
        <div
          className="col-span-1 rounded-lg flex-col py-24 px-4 hidden md:flex"
          style={{ background: "#3a49f9" }}
        >
          <HeadingText1 className="uppercase text-white text-center">
            Start your business
          </HeadingText1>
          <Image src={ShakeHandImage} preview={false} />
        </div>
        <div className="p-20 col-span-3 md:col-span-2">
          <Steps current={currentStep}>
            <Step title="Business Info." />
            <Step title="Personal Info." />
          </Steps>
          <Form
            form={form[0]}
            className="mt-12 flex flex-col justify-between"
            style={{ height: "100%" }}
            layout="vertical"
            autoComplete="off"
          >
            <div className="grid grid-cols-2 gap-x-6">
              {currentStep === 0 ? renderFirstStep() : renderSecondStep()}
            </div>
            <div
              className={`flex ${
                currentStep === 0 ? "justify-end" : "justify-between"
              } `}
            >
              {currentStep === 1 && (
                <CustomButton
                  className={`px-20 mb-14`}
                  onClick={() => setCurrentStep(0)}
                >
                  <HeadingText4>Back</HeadingText4>
                </CustomButton>
              )}
              <CustomButton
                className={`flex justify-center items-center px-20 mb-14 ${
                  currentStep === 1 ? "bg-green-500" : ""
                }`}
                onClick={onSubmit}
              >
                <HeadingText4>
                  {loading ? (
                    <Loading />
                  ) : currentStep === 0 ? (
                    "Next"
                  ) : (
                    "Finish"
                  )}
                </HeadingText4>
              </CustomButton>
            </div>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterPage;
