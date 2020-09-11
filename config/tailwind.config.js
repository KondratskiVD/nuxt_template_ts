const defaultTheme = require('tailwindcss/defaultTheme')
/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        gray: Object.assign(defaultTheme.colors.gray, {
          light: '#dbdada',
          default: '#54576b',
          dark: '#323A45'
        }),
        red: Object.assign(defaultTheme.colors.red, {
          dark: '#C72825'
        })
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar'
    })
  ]
}
