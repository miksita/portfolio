/** @type {import('tailwindcss').Config} */
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

// module.exports = {
//   plugins: [
//     require('postcss-nested'), // Поддержка вложенных стилей
//     require('postcss-preset-env')({ // Поддержка современных CSS-функций
//       features: {
//         'custom-properties': true, // Включение CSS-переменных
//       },
//     }),
//     require('tailwindcss'), // Подключение Tailwind CSS
//     require('autoprefixer'), // Автопрефиксы
//   ],
// };