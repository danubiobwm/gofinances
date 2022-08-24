import React from "react";

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon
} from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

export function Dashboard() {
  return (
    <>
      <Container>
        <Header>
          <UserWrapper>
            <UserInfo>
              <Photo source={{ uri: "https://github.com/danubiobwm.png" }} />
              <User>
                <UserGreeting>Olá,</UserGreeting>
                <UserName>Danubio</UserName>
              </User>
            </UserInfo>
            <Icon name="power"/>
          </UserWrapper>
        </Header>
      </Container>
    </>
  );
}
