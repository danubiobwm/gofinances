import React from 'react';
import { 
  Container, 
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGretting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList
} from './styles';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardData } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardData {
  id: string;
}

const data: DataListProps[] = [
  {
    id: '1',
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    date: '13/04/2020',
    category: {
      name: "Vendas",
      icon: "dollar-sign"
    },
    type: 'positive'
  },
  {
    id: '2',
    title: "Hamburgueria Pizzy",
    amount: "R$ 59,00",
    date: '10/04/2020',
    category: {
      name: "Alimentação",
      icon: "coffee"
    },
    type: 'negative'
  },
  {
    id: '3',
    title: "Aluguel do apartamento",
    amount: "R$ 1.200,00",
    date: '27/03/2020',
    category: {
      name: "Casa",
      icon: "home"
    },
    type: 'negative'
  },
  {
    id: '4',
    title: "Desenvolvimento de aplicativo",
    amount: "R$ 15.000,00",
    date: '13/03/2020',
    category: {
      name: "Vendas",
      icon: "dollar-sign"
    },
    type: 'positive'
  }
]

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/40647550?v=4' }} />

            <User>
              <UserGretting>Olá,</UserGretting>
              <UserName>Danubio</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard 
          title="Entradas" 
          amount="R$ 17.400,00" 
          lastTransaction="Última entrada dia 13 de abril" 
          type="up"
        />
        <HighlightCard 
          title="Saídas" 
          amount="R$ 1.259,00" 
          lastTransaction="Última saída dia 03 de abril" 
          type="down"
        />
        <HighlightCard 
          title="Total" 
          amount="R$ 16.141,00" 
          lastTransaction="01 à 16 de abril" 
          type="total"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data} 
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  )
};
