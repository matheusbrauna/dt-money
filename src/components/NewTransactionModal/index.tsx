import * as Dialog from '@radix-ui/react-dialog'
import {
  ArrowCircleDown,
  ArrowCircleUp,
  X as CloseButtonIcon,
} from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <CloseButtonIcon size={24} />
        </CloseButton>

        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" />
          <input type="text" placeholder="Categoria" />

          <TransactionType>
            <TransactionTypeButton color="income" value="income">
              <ArrowCircleUp size={24} />
              <span>Entrada</span>
            </TransactionTypeButton>

            <TransactionTypeButton color="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              <span>Saída</span>
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
