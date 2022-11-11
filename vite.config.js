import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

import fs from 'fs';
const host = 'myembroidery-production.up.railway.app/'


export default defineConfig({
    server: {
        host,
        hmr: { host },
        https: {
            key: fs.readFileSync(`/path/to/${host}.key`),
            cert: fs.readFileSync(`/path/to/${host}.crt`),
        },
    },
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
