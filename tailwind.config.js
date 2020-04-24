/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      'mt': ['Montserrat']
    },
    colors: {
      pink: {
        default: '#FF5CA8',
        lighter: '#FFB3D6'
      },
      brown: {
        default: '#F57B51',
        lighter: '#FFC6B3'
      },
      green: {
        default: '#58DFB6',
        lighter: '#B3FFE8'
      },
      yellow: {
        default: '#F9CF31',
        lighter: '#FFEFB3'
      },
      orange: {
        default: '#FF5C5C',
        lighter: '#FFB3B3'
      },
      black: '#18253C',
      grey: {
        default: '#F5F6F9',
        50: '#FBFBFB',
        100: '#D6D6D6',
        200: '#9DA6BA'
      },
      blue: '#4067E8',
      white: '#ffffff'

    },
    extend: {
      spacing: {
        '1/2': '0.15rem',
        '18': '4.5rem'
      },
      width: {
        '28': '7rem'
      },
      minWidth: {
        '6': '1.5rem'
      },
      padding: {
        '1-5': '0.25rem',
        '2-5': '0.6rem'
      },
      minHeight: {
        '2/5': '40%',
        '1/2': '50%'
      },
      borderRadius: {
        'card': '0.7rem'
      },
      zIndex: {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6
      },
      opacity: {
        '14': '0.14'
      },
      fontSize: {
        'xxs': '0.5rem'
      }
    },
    stroke: theme => ({
      'black': theme('colors.black'),
      'white': theme('colors.white'),
      'grey-50': theme('colors.grey.50'),
    }),
    fill: theme => ({
      'black': theme('colors.black'),
      'white': theme('colors.white'),
      'pink': theme('colors.pink'),
      'brown': theme('colors.brown'),
      'green': theme('colors.green'),
      'yellow': theme('colors.yellow'),
      'orange': theme('colors.orange'),
      'grey-50': theme('colors.grey.50'),
      'grey-200': theme('colors.grey.200')
    })
  },
  variants: {
    fontFamily: [],
    stroke: ['responsive', 'hover'],
    fill: ['responsive', 'hover'],
  },
  plugins: [],
  // corePlugins: {
  //   gridTemplateColumns: false,
  // }
}
