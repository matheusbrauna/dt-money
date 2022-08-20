import { SummaryCard, SummaryContainer } from './styles'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { theme } from '../../../stitches.config'

export function Summary() {
  const { colors } = theme
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={String(colors['green-500'])} />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={String(colors['red-500'])} />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard color="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={String(colors.white)} />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
