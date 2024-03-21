import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { stylexPlugin } from 'vite-plugin-stylex-dev'
import jsxStylex from 'vite-plugin-stylex-jsx-attribute'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [jsxStylex(), react(), stylexPlugin()],
})
