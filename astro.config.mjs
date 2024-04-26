import {defineConfig} from 'astro/config';
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
                generateScopedName: (name, file, _css) => {
                    const fileArr = file.split('/');
                    const fileName = fileArr[fileArr.length - 1];
                    return `${fileName.replace('.module.scss', '')}__${name}`
                }
            }
        },
        build: {
            rollupOptions: {
                output: {
                    entryFileNames: `local/templates/main/js/[name].js`,
                    // assetFileNames: 'local/templates/main/css/[name][extname]'
                }
            }
        }
    }
});