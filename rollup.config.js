import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import packageJson from './package.json'
import { terser } from 'rollup-plugin-terser'

const basePlugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({ useTsconfigDeclarationDir: true }),
  terser()
]

const plugins =
  process.env.ENV === 'production' ? [...basePlugins, terser()] : basePlugins

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    },
    {
      name: 'greeting',
      file: packageJson.browser,
      format: 'iife',
      sourcemap: true
    }
  ],
  plugins
}
