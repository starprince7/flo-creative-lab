# Documentation: Tailwind CSS @apply Directive Syntax

## Overview
The `rv-button-top` styling uses **Tailwind CSS v3.4.1** with the `@apply` directive syntax. This syntax allows you to write inline utility classes within your SCSS/CSS files.

## Key Configuration Files

### 1. **tailwind.config.ts** (Main Configuration)
```typescript
import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'], // Enables class-based dark mode
  theme: {
    // Custom colors, fonts, and extensions
  },
  plugins: [],
} satisfies Config
```

### 2. **postcss.config.mjs** (PostCSS Configuration)
```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};
```

### 3. **scss/main.scss** (Main SCSS Entry)
```scss
@use 'tailwind';
@use 'buttons';
// ... other imports
```

### 4. **scss/_tailwind.scss** (Tailwind Directives)
```scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. **app/layout.tsx** (Import in Next.js)
```typescript
import '../scss/main.scss'
```

## Package Dependencies
```json
{
  "tailwindcss": "^3.4.1",
  "prettier-plugin-tailwindcss": "^0.6.9",
  "eslint-plugin-tailwindcss": "^3.17.5"
}
```

## @apply Syntax Examples

### Basic Usage
```scss
.my-class {
  @apply relative z-10; // Position and z-index
}
```

### With Nested Selectors
```scss
.button {
  @apply relative overflow-hidden;
  
  .button-top {
    @apply relative z-10;
    span {
      @apply inline-block font-normal uppercase tracking-[1.12px];
    }
  }
}
```

### With Modifiers
```scss
.button:hover .button-top {
  @apply -translate-y-[101%];
  span {
    @apply -rotate-12;
  }
}
```

### With Dark Mode
```scss
.button-white .button-top {
  @apply border bg-backgroundBody dark:border-dark dark:bg-dark;
  span {
    @apply text-secondary dark:text-backgroundBody;
  }
}
```

## Setup for New Project

### 1. Install Dependencies
```bash
npm install -D tailwindcss postcss autoprefixer sass
npm install -D prettier-plugin-tailwindcss eslint-plugin-tailwindcss
```

### 2. Initialize Tailwind
```bash
npx tailwindcss init -p
```

### 3. Configure tailwind.config.ts
```typescript
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      // Your customizations
    },
  },
} satisfies Config
```

### 4. Create SCSS Structure
```
scss/
├── main.scss
├── _tailwind.scss
├── _buttons.scss
└── _components.scss
```

### 5. main.scss
```scss
@use 'tailwind';
@use 'buttons';
@use 'components';
```

### 6. _tailwind.scss
```scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 7. Import in App
```typescript
// app/layout.tsx or pages/_app.tsx
import './scss/main.scss'
```

## Key Features Used

- **Arbitrary Values**: `tracking-[1.12px]`, `translate-y-[101%]`
- **Dark Mode**: `dark:border-dark`, `dark:bg-backgroundBody`
- **Custom Colors**: Defined in `tailwind.config.ts`
- **Transitions**: `transition duration-500`
- **Transforms**: `rotate-12`, `-translate-y-[101%]`

This setup provides full Tailwind CSS utility functionality within SCSS files using the `@apply` directive.
