import { Theme } from 'theme-ui'
import { durations, easings } from '../theme/motion'

const disabledStyles = {
  opacity: 0.7,
  cursor: 'not-allowed',
}

const sharedButtonStyles = {
  transition: `all ${durations.mid} ${easings.easeInOutCubic}`,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  fontSize: 3,
  fontWeight: 'body',
  fontFamily: 'inherit',
  borderRadius: 'full',
  cursor: 'pointer',
  lineHeight: 1,
  border: '2px solid',
  '&:disabled': {
    ...disabledStyles,
  },
  '&[aria-disabled="true"]': {
    cursor: 'not-allowed',
  },
  '&': {
    variant: 'utils.focusVisibleOutset',
  },
}
const sharedLargeButtonStyles = {
  px: '2em',
  pt: '0.6em',
  pb: '0.7em',
}
const sharedSmallButtonStyles = {
  px: '1.3em',
  pt: '0.4em',
  pb: '0.5em',
  fontSize: 2,
}

export const buttons: Theme['buttons'] = {
  primary: {
    ...sharedButtonStyles,
    ...sharedLargeButtonStyles,
    color: 'bright',
    bg: 'primary',
    borderColor: 'primary',
    '&:hover:not(:disabled),&:hover:not([aria-disabled="true"])': {
      bg: 'blue.800',
      borderColor: 'blue.800',
      color: 'background',
    },
    '&:active:not(:disabled),&:active:not([aria-disabled="true"])': {
      bg: 'blue.900',
      borderColor: 'blue.900',
      color: 'background',
    },
  },

  secondary: {
    ...sharedButtonStyles,
    ...sharedLargeButtonStyles,
    color: 'bright',
    bg: 'blue.900',
    borderColor: 'blue.900',
    '&:hover:not(:disabled),&:hover:not([aria-disabled="true"])': {
      bg: 'blue.800',
      borderColor: 'blue.800',
      color: 'background',
    },
    '&:active:not(:disabled),&:active:not([aria-disabled="true"])': {
      bg: 'blue',
      borderColor: 'blue',
      color: 'background',
    },
  },

  unstyled: {
    p: 0,
    borderRadius: 0,
    bg: 'transparent',
    color: 'inherit',
    fontFamily: 'inherit',
    cursor: 'pointer',
    textAlign: 'inherit',
    variant: 'utils.focusVisibleInset',
    '&': {
      variant: 'motion.transitions.all',
    },
  },
}
