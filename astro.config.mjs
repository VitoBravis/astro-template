import {defineConfig} from 'astro/config';
import react from "@astrojs/react";

const targetAssetsPath = process.env.BUILD_BX ? 'local/templates/main' : 'assets'

// https://astro.build/config
export default defineConfig({
    outDir: 'build',
    build: {
        inlineStylesheets: 'never',
        assets: targetAssetsPath
    },
    compressHTML: !process.env.BUILD_BX,
    integrations: [react()],
    vite: {
        build: {
            rollupOptions: {
                output: {
                    entryFileNames: `${targetAssetsPath}/js/[name].js`,
                    assetFileNames: `${targetAssetsPath}/css/[name].[hash:8][extname]`
                }
            }
        }
    }
});