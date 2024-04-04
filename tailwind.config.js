/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'bg_image': "url('/assets/images/headerbg.png')",
        'bg_image2': "url('/assets/images/newslatter.png')",
        'bg_footer': "url('/assets/images/footerbg.png')"
      },
      backgroundSize: {
        "BgSize": "100% 100%"
      },
    },
  },
  plugins: [],
};
