import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.js'],
    },
    resolve: {
        alias: {
            '@app': path.resolve(__dirname, './src/app'),
            '@entities': path.resolve(__dirname, './src/entities'),
            '@features': path.resolve(__dirname, './src/features'),
            '@shared': path.resolve(__dirname, './src/shared'),
            '@widgets': path.resolve(__dirname, './src/widgets'),
            '@constants': path.resolve(__dirname, './src/shared/constants'),
        },
    },
})
