import { dateFormatter, priceFormatter } from '../../../../utils/formatter'
import { PriceHighlight, Td } from './styles'

interface TransactionsDataProps {
  transaction: {
    id: number
    description: string
    type: 'income' | 'outcome'
    category: string
    price: number
    createdAt: string
  }
}

export function TransactionsData({ transaction }: TransactionsDataProps) {
  return (
    <tr>
      <Td>{transaction.description}</Td>
      <Td>
        <PriceHighlight color={transaction.type}>
          {transaction.type === 'outcome' && '- '}
          {priceFormatter.format(transaction.price)}
        </PriceHighlight>
      </Td>
      <Td>{transaction.category}</Td>
      <Td>{dateFormatter.format(new Date(transaction.createdAt))}</Td>
    </tr>
  )
}
