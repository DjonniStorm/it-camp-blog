// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from '@catppuccin/starlight';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Команда №41',
      defaultLocale: 'ru',
      locales: {
        ru: {
          label: 'Русский',
          lang: 'ru',
        },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight',
        },
      ],
      sidebar: [
        {
          label: 'Хронология',
          items: [
            { label: 'Наши истории', slug: 'history/description' },
            {
              label: 'День 0',
              slug: 'history/day0',
            },
            {
              label: 'День 1',
              slug: 'history/day1',
            },
          ],
        },
        {
          label: 'Мемы',
          autogenerate: { directory: 'memes' },
        },
      ],
      plugins: [catppuccin()],
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      },
    },
  },
});

