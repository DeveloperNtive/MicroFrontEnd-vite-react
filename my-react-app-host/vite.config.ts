import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { federation } from '@module-federation/vite'

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    federation({
      name: 'my-react-app-host',
      filename: 'remoteEntry.js',
      dts: false,
      remotes: {
        mf1: {
          type: "module",
          name: "mf1",
          entry: "http://localhost:5173/remoteEntry.js",
          entryGlobalName: "mf1",
          shareScope: "default",
        },
        mf2: {
          type: "module",
          name: "mf2",
          entry: "http://localhost:5174/remoteEntry.js",
          entryGlobalName: "mf2",
          shareScope: "default",
        },
      },
      exposes: {},
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^19.2.4',
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
