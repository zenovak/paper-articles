/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      typography: {
        DEFAULT: {
          css: {
            // color: '#333',
            blockquote: {
              paddingInlineStart: "unset",
              padding: "1rem 1rem 1rem 3rem"
            },
          },
        },
        lg: {
          css: {
            // color: '#333',
            blockquote: {
              paddingInlineStart: "unset",
              padding: "1rem 1rem 1rem 3rem"
            },
          },
        },
        sm: {
          css: {
            // color: '#333',
            blockquote: {
              paddingInlineStart: "unset",
              padding: "1rem 1rem 1rem 3rem"
            },
          },
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({addVariant}) {
      addVariant('prose-inline-code', '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))');
    })
  ],
};
