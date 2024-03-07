import React from "react";
import styled from "styled-components";

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 60px;
  height: 32px;
  background: grey;
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
`;

const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 28px;
  height: 28px;
  border-radius: 45px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  transform: ${({ isChecked }) =>
    isChecked ? "translateX(28px)" : "translateX(0)"};
`;

const Switch = (props) => {
  return (
    <>
      <SwitchInput
        checked={props.isOn}
        onChange={props.handleToggle}
        type="checkbox"
        id="react-switch-new"
        className="react-switch-checkbox"
      />
      <SwitchLabel
        style={{ background: props.isOn && props.onColor }}
        className="react-switch-label"
        htmlFor="react-switch-new"
      >
        <SwitchButton className="react-switch-button" isChecked={props.isOn} />
      </SwitchLabel>
    </>
  );
};

export default Switch;
