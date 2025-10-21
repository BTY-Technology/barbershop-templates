# Fonts

## Bebas Neue Font

This template uses the Bebas Neue font for display headings.

### Installation

1. Download Bebas Neue from [Google Fonts](https://fonts.google.com/specimen/Bebas+Neue)
2. Place `BebasNeue-Regular.ttf` in this directory

### Alternative: Use Google Fonts CDN

If you prefer not to use local fonts, update `app/layout.tsx`:

```typescript
import { Bebas_Neue, Inter } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
```

Then use in the HTML element:
```typescript
<html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
```

This will load fonts from Google Fonts CDN instead of local files.
