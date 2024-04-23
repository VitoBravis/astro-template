import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    outDir: 'build',
    build: {
        inlineStylesheets: 'never',
        assets: 'assets'
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
                    // TODO: Для Битрикса - Разный путь в зависимости от режима сборки (DEV | PROD)
                    entryFileNames: `assets/[name].js`,
                    assetFileNames: 'assets/css/[name][extname]'
                }
            }
        }
    }
});