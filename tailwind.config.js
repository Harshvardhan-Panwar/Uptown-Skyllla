/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: { //play button animation effect
        'ping-custom1': 'ping 1.5s cubic-bezier(0, 0, 0.1, 1) infinite 0.2s',
        'ping-custom2': 'ping 1.5s cubic-bezier(0, 0, 0.1, 1) infinite 0.4s',
        'ping-custom3': 'ping 1.5s cubic-bezier(0, 0, 0.1, 1) infinite 0.6s',
        'ping-custom4': 'ping 1.5s cubic-bezier(0, 0, 0.1, 1) infinite 0.8s',
        'ping-custom5': 'ping 1.5s cubic-bezier(0, 0, 0.1, 1) infinite 1s',
      },
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif']
    },
  },
  plugins: [],
}

