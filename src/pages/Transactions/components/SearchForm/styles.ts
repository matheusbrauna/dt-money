import { styled } from '../../../../../stitches.config'

export const SearchFormContainer = styled('form', {
  display: 'flex',
  gap: '1rem',

  input: {
    flex: '1',
    borderRadius: 6,
    border: 0,
    backgroundColor: '$gray-900',
    color: '$gray-300',
    padding: '1rem',
    '&::placeholder': {
      color: '$gray500',
    },
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem',
    background: 'transparent',
    border: '1px solid $green-300',
    color: '$green-300',
    fontWeight: 'bold',
    borderRadius: 6,

    '&:hover': {
      background: '$green-500',
      borderColor: '$green-500',
      color: '$white',
      transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
    },
  },
})
