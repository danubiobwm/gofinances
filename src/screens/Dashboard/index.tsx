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
  Icon,
  HighlightCards,
  Transactions,
  Title
} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

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
            <Icon name="power" />
          </UserWrapper>
        </Header>
        <HighlightCards>
          <HighlightCard
            title="Entrada"
            amount="R$ 1.200,00"
            lastTransition="Ultima saida dia 13 de Abriil"
            type='up'
          />
          <HighlightCard
            title="Saida"
            amount="R$ 200,00"
            lastTransition="01 a 16 de abril"
            type='down'
          />
          <HighlightCard
            title="Total"
            amount="R$ 2000,00"
            lastTransition="Ultima saida dia 13 de Abriil"
            type='total'
          />
        </HighlightCards>

        <Transactions>
          <Title>
            Listagem
          </Title>

          <TransactionCard />
          
        </Transactions>
      </Container>
    </>
  );
}
