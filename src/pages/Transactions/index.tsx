import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  Td,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <Td>Desenvolvimento de site</Td>
              <Td>
                <PriceHighlight color="income">R$ 12.000,00</PriceHighlight>
              </Td>
              <Td>Venda</Td>
              <Td>13/04/2022</Td>
            </tr>
            <tr>
              <Td>Hamburguer</Td>
              <Td>
                <PriceHighlight color="outcome">- R$ 59,00</PriceHighlight>
              </Td>
              <Td>Alimentação</Td>
              <Td>10/04/2022</Td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
