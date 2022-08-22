import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../../stitches.config'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0 ,0.75)',
})

export const Content = styled(Dialog.Content, {
  minWidth: '32rem',
  borderRadius: 6,
  padding: '2.5rem 3rem',
  backgroundColor: '$gray-800',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  form: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    input: {
      borderRadius: 6,
      border: 0,
      backgroundColor: '$gray-900',
      color: '$gray-300',
      padding: '1rem',

      '&::placeholder': {
        color: '$gray-500',
      },
    },
  },

  "button[type='submit']": {
    height: '58px',
    border: 0,
    backgroundColor: '$green-500',
    color: '$white',
    fontWeight: 'bold',
    padding: '0 1.25rem',
    borderRadius: 6,
    marginTop: '1.5rem',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green-700',
      transition: 'background-color 0.2s',
    },
  },
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  color: '$gray-500',
})

export const TransactionType = styled(RadioGroup.Root, {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1rem',
  marginTop: '0.5rem',
})

export const TransactionTypeButton = styled(RadioGroup.Item, {
  backgroundColor: '$gray-700',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  borderRadius: 6,
  border: 0,

  span: {
    color: '$gray-300',
  },

  "&[data-state='unchecked']:hover": {
    backgroundColor: '$gray-600',
    transition: 'background-color 0.2s',
  },

  "&[data-state='checked']": {
    color: '$white',

    svg: {
      color: '$white',
    },
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  variants: {
    color: {
      income: {
        color: '$green-300',
        "&[data-state='checked']": {
          backgroundColor: '$green-500',
        },
        "&[data-state='checked']:hover": {
          backgroundColor: '$green-700',
          transition: 'background-color 0.2s',
        },
      },
      outcome: {
        color: '$red-300',
        "&[data-state='checked']": {
          backgroundColor: '$red-500',
        },
        "&[data-state='checked']:hover": {
          backgroundColor: '$red-700',
          transition: 'background-color 0.2s',
        },
      },
    },
  },
})
