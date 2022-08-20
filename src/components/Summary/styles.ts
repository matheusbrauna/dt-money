import { styled } from '../../../stitches.config'

export const SummaryContainer = styled('section', {
  width: '100%',
  maxWidth: 1120,
  margin: '0 auto',
  padding: '0 1.5rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',
  marginTop: '-5rem',
})

export const SummaryCard = styled('div', {
  backgroundColor: '$gray-600',
  borderRadius: 6,
  padding: '2rem',
  boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '$gray-300',
  },

  strong: {
    display: 'block',
    marginTop: '1rem',
    fontSize: '2rem',
  },

  variants: {
    color: {
      green: {
        backgroundColor: '$green-700',
      },
    },
  },
})
