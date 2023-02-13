import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    '::-webkit-scrollbar': {
      width: '7px',
    },

    '::-webkit-scrollbar-track': {
      background: '#FFFFFF',
    },

    '::-webkit-scrollbar-thumb': {
      borderRadius: '0.5rem',
    },

    '::-webkit-scrollbar-thumb:hover': {
      background: '$orange',
    }
  },

  html: {
    fontSize: '62.5%',
  },

  body: {
   
  },

  'body, input, textarea, button': {

  },
})