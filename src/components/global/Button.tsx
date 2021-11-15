import React, { PropsWithChildren } from "react";
import { Button } from "antd";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
  &.ant-btn {
    background: #3a49f9;
    color: #fff;
    transition: all 0.3s;
    border-radius: 4px;
    border: none;
  }
`;

interface CustomButtonProps {
  className?: string;
  onClick(): void;
}

const CustomButton = ({
  children,
  className,
  onClick,
}: PropsWithChildren<CustomButtonProps>) => {
  return (
    <div>
      <StyledButton
        size="large"
        type="primary"
        className={className}
        onClick={onClick}
      >
        {children}
      </StyledButton>
    </div>
  );
};

export default CustomButton;
