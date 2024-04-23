import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    build: {
        inlineStylesheets: 'never',
        assetsPrefix: 'test'
    },
    compressHTML: false,
    integrations: [react()],
    vite: {
        css: {
            modules: {
                generateScopedName: (name, _file, _css) => name
            }
        },
        build: {
            rollupOptions: {
                output: {
                    assetFileNames: 'assets/[name][extname]',
                }
            }
        }
    }
});