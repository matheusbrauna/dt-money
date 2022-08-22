import { styled } from '../../../../../stitches.config'

export const Td = styled('td', {
  padding: '1.25rem 2rem',
  backgroundColor: '$gray-700',

  '&:first-child': {
    width: '50%',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },

  '&:last-child': {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
})

export const PriceHighlight = styled('span', {
  variants: {
    color: {
      income: {
        color: '$green-300',
      },
      outcome: {
        color: '$red-300',
      },
    },
  },
})
