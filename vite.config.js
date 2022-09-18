import { sveltekit } from '@sveltejs/kit/vite';
import { extractorSvelte, presetIcons, presetUno, transformerVariantGroup } from 'unocss';
import transformerDirective from '@unocss/transformer-directives';
import Unocss from 'unocss/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    Unocss({
      presets: [
        presetUno(),
        presetIcons({
          cdn: 'https://esm.sh/'
        }),
      ],
      extractors: [extractorSvelte],
      theme: {
        colors: {
          'primary': '#150050',
          'secondary': '#000000',
          'accent': '#610094'
        }
      },
      transformers: [
        transformerDirective(),
        transformerVariantGroup()
      ],
    })]
};

export default config;
