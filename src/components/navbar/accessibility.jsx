import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

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

const LinkedinButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #BEBE;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #BEBE;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  z-index: 100;
  &:hover {
    background-color: #BEBE;
    color: #222;
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <LinkedinButton onClick={(e) => (window.location = 'https://www.linkedin.com/public-profile/in/samuel-hsu/?challengeId=AQE_AMo5qx5jxgAAAXd6AD3MP0jNRdNvc6vr4clbyLym5Z_SjYCJ_7UB1C0_68OdfYB5Iq1B_pd2_Hju7QBSZBGbx_lQMXClAg&submissionId=3db3771f-5651-6116-5c7d-fc1322ec4c17')}>Linkedin</LinkedinButton>
    </AccessibilityContainer>
  );
}