import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import sassDts from 'vite-plugin-sass-dts'
import srcset from 'vite-plugin-srcset'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sassDts(),
    srcset(),
    svgr({
      include: '**/icons/*.svg',
      svgrOptions: {
        memo: true,
        replaceAttrValues: { '#000000': 'currentColor' },
        svgProps: {
          fill: 'currentColor',
          stroke: 'currentColor',
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@ui': path.resolve(__dirname, 'src/components/ui'),
      '@blocks': path.resolve(__dirname, 'src/components/blocks'),
      '@pages': path.resolve(__dirname, 'src/components/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@types': path.resolve(__dirname, 'src/types.ts'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@mixins': path.resolve(__dirname, 'src/styles/mixins.scss'),
    },
  },
  base: 'timers',
})
