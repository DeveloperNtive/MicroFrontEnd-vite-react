import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    federation({
      name: 'mf1',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.tsx',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^19.2.4',
          strictVersion: false,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^19.2.4',
          strictVersion: false, 
        },
      },
    }),
  ],
})
