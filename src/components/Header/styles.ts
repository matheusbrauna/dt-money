import { styled } from '../../../stitches.config'

export const HeaderContainer = styled('header', {
  background: '$gray-900',
  padding: '2.5rem 0 7.5rem',
})

export const HeaderContent = styled('div', {
  width: '100%',
  maxWidth: 1120,
  margin: '0 auto',
  padding: '0 1.5rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const NewTransactionButton = styled('button', {
  height: 50,
  border: 0,
  backgroundColor: '$green-500',
  color: '$white',
  fontWeight: 'bold',
  padding: '0 1.25rem',
  borderRadius: 6,
  '&:hover': {
    background: '$green-700',
    transition: 'background-color 0.2s',
  },
})
