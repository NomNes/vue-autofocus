import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'

export default defineConfig({
  input: 'src/index.ts',
  external: ['vue'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
    },
  ],
  plugins: [typescript()],
})
