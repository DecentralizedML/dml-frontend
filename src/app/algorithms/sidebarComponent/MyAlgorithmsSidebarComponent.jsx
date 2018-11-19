import React from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';

import {
  Row,
  SidebarWrapper,
  AvatarImage,
  UserName,
  UserDescription,
  Divider,
  UserKPINumber,
  DMLWrapper,
  DMLLogo,
  DMLText,
  KPITitle,
  DMLLogoBlue
} from "../UI";

const MyAlgorithmsSidebar = props => {
  return (
    <SidebarWrapper>
      <AvatarImage />
      <UserName>Jimmy Barnes</UserName>
      <UserDescription>
        I've been a developer for 6 years. Currently obsessed with machine
        learning.
      </UserDescription>
      <Divider />
      <Row style={{ marginRight: "auto" }}>
        <UserKPINumber>5254</UserKPINumber>
        <DMLWrapper style={{ marginLeft: "12px" }}>
          <DMLLogo />
          <DMLText>DML</DMLText>
        </DMLWrapper>
      </Row>
      <Row style={{ marginRight: "auto", marginTop: "8px" }}>
        <DMLLogoBlue />
        <KPITitle style={{ marginLeft: "8px" }}>Total Earnings</KPITitle>
      </Row>
    </SidebarWrapper>
  );
};

MyAlgorithmsSidebar.propTypes = {};

const mapStateToProps = state => {
  return {
    text: state.text,
    isAuthenticated: state.account.isAuthenticated
  };
};

const MyAlgorithmsSidebarComponent = connect(mapStateToProps)(
  MyAlgorithmsSidebar
);

export default MyAlgorithmsSidebarComponent;
