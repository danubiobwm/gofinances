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
  Title,
  TransactionsList
} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";
import { getBottomSpace } from "react-native-iphone-x-helper";

export function Dashboard() {
  const data = [
    {
    type: 'positive',
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
      name: "Vendas",
      icon: "dollar-sign",
    },
    date: "12/04/2022",
  },
    {
    type: 'negative',
    title: "Lanches",
    amount: "R$ 200,00",
    category: {
      name: "Lanchonetes",
      icon: "dollar-sign",
    },
    date: "12/04/2022",
  },
    {
    type: 'negative',
    title: "Aluguel",
    amount: "R$ 1.000,00",
    category: {
      name: "Casa",
      icon: "dollar-sign",
    },
    date: "12/04/2022",
  },
];

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
            type="up"
          />
          <HighlightCard
            title="Saida"
            amount="R$ 200,00"
            lastTransition="01 a 16 de abril"
            type="down"
          />
          <HighlightCard
            title="Total"
            amount="R$ 2000,00"
            lastTransition="Ultima saida dia 13 de Abriil"
            type="total"
          />
        </HighlightCards>

        <Transactions>
          <Title>Listagem</Title>
          
          <TransactionsList 
          data={data}
          renderItem={({item})=> <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contextContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
          />
          
         
        </Transactions>
      </Container>
    </>
  );
}
