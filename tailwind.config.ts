import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { 'cream-canvas': '#F2EEE9', 'paper-white': '#FAF8F5', bubblegum: '#E882A7', 'soft-pink': '#F4A5AE', charcoal: '#231F20', 'taupe-muted': '#8C827A' }, boxShadow: { paper: '5px 6px 0 #231f20', lift: '8px 10px 0 #231f20' } } },
  plugins: []
};
export default config;
