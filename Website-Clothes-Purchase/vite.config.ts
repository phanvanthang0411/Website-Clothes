import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

const commonPath = path.join(__dirname, "./src/commonComponent/index.tsx")
const apiPath = path.join(__dirname, './src/api/index.tsx')
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000
    },
    css: {
        devSourcemap: true
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src'),
            '@common': commonPath,
            '@api' : apiPath
        }
    }
})
