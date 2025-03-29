/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // تأكد من أن المسارات صحيحة
  theme: {
    extend: {
      colors: {
        primary: "#5A47FB",
        secondary: "#FF9800",
        accent: "#00C4B4",
        background: "#F5F5F5",
        text: "#333333",
      },
    },
  },
  plugins: [],
};
