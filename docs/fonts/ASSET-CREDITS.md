# Font credits

The font files are unchanged Latin subsets downloaded from the official Google Fonts API. Exact source URLs, retrieval time and SHA256 hashes are recorded in `asset-sources.json`. The API response is preserved in `google-fonts-source.css` for reference.

Cormorant Garamond is copyright 2015 the Cormorant Project Authors. DM Sans is copyright 2014 the DM Sans Project Authors. Both families use the SIL Open Font License 1.1. Keep the included OFL files with redistributed font assets.

| Local file | Style | Weight |
| --- | --- | --- |
| cormorant-garamond-latin-500-normal.woff2 | Normal | 500 |
| cormorant-garamond-latin-500-italic.woff2 | Italic | 500 |
| dm-sans-latin-normal.woff2 | Normal variable font | 400 to 600 for this site |

The DM Sans file serves weights 400, 500 and 600 from one file. Its internal variable axis supports 100 to 1000; the suggested declaration limits this site's use to the requested range. Latin subsets need a system fallback for other scripts.

Suggested local declarations:

```css
@font-face {
  font-family: 'Cormorant Garamond';
  src: url('/fonts/cormorant-garamond-latin-500-normal.woff2') format('woff2');
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: 'Cormorant Garamond';
  src: url('/fonts/cormorant-garamond-latin-500-italic.woff2') format('woff2');
  font-style: italic;
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: 'DM Sans';
  src: url('/fonts/dm-sans-latin-normal.woff2') format('woff2');
  font-style: normal;
  font-weight: 400 600;
  font-display: swap;
}
```

Suggested fallbacks are `'Cormorant Garamond', Georgia, serif` and `'DM Sans', system-ui, sans-serif`. These declarations use local files without an external font request.

Official licence sources: [Cormorant Garamond OFL](https://raw.githubusercontent.com/google/fonts/main/ofl/cormorantgaramond/OFL.txt) and [DM Sans OFL](https://raw.githubusercontent.com/google/fonts/main/ofl/dmsans/OFL.txt).

All files passed WOFF2 signature and length checks. FontTools decoded all three files and verified character maps, weights and style metadata.
