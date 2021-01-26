import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
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

const LinkedinButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #FFFFFF;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #EEEE;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  z-index: 100;
  &:hover {
    background-color: #EEEE;
    color: #222;
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <LinkedinButton onClick={(e) => (window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO')}>Resume</LinkedinButton>
    </AccessibilityContainer>
  );
}