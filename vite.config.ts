/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3005,
    },
    base: '/todo-mb/',
    plugins: [react(), tsconfigPaths()],
})
