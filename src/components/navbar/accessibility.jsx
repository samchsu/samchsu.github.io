import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import resume from "../../assets/docs/Samuel_C_Hsu-Resume.pdf"
const AccessibilityContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #6adf76;
  background-image: linear-gradient(to right, transparent 0%, #00c9ff 100%);
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #00c9ff;
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const ResumeButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #98e5f7;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #98e5f7;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  z-index: 100;
  &:hover {
    background-color: #98e5f7;
    color: #222;
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <ResumeButton onClick={(e) => (window.location = resume)}>Resume</ResumeButton>
    </AccessibilityContainer>
  );
}