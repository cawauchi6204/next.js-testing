/** @type {import('tailwindcss').Config} */
module.exports = {
  // pages配下で使用されているユーティリティーをデプロイ時にcssとして展開してくれる
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
}
