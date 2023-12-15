/**
 * Generated by scripts/prepare.ts
 */
import type { ThemeRegistrationRaw } from 'shikiji-core'

type DynamicThemeReg = () => Promise<{ default: ThemeRegistrationRaw }>

export interface BundledThemeInfo {
  id: string
  name: string
  type: 'light' | 'dark'
  import: DynamicThemeReg
}

export const bundledThemesInfo: BundledThemeInfo[] = [
  {
    "id": "dark-plus",
    "name": "Dark Plus",
    "type": "dark",
    "import": (() => import('shiki/themes/dark-plus.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "dracula",
    "name": "Dracula",
    "type": "dark",
    "import": (() => import('shiki/themes/dracula.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "dracula-soft",
    "name": "Dracula Soft",
    "type": "dark",
    "import": (() => import('shiki/themes/dracula-soft.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "github-dark",
    "name": "GitHub Dark",
    "type": "dark",
    "import": (() => import('shiki/themes/github-dark.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "github-dark-dimmed",
    "name": "GitHub Dark Dimmed",
    "type": "dark",
    "import": (() => import('shiki/themes/github-dark-dimmed.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "github-light",
    "name": "GitHub Light",
    "type": "light",
    "import": (() => import('shiki/themes/github-light.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "light-plus",
    "name": "Light Plus",
    "type": "light",
    "import": (() => import('shiki/themes/light-plus.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "material-theme",
    "name": "Material Theme",
    "type": "dark",
    "import": (() => import('shiki/themes/material-theme.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "material-theme-darker",
    "name": "Material Theme Darker",
    "type": "dark",
    "import": (() => import('shiki/themes/material-theme-darker.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "material-theme-lighter",
    "name": "Material Theme Lighter",
    "type": "light",
    "import": (() => import('shiki/themes/material-theme-lighter.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "material-theme-ocean",
    "name": "Material Theme Ocean",
    "type": "dark",
    "import": (() => import('shiki/themes/material-theme-ocean.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "material-theme-palenight",
    "name": "Material Theme Palenight",
    "type": "dark",
    "import": (() => import('shiki/themes/material-theme-palenight.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "min-dark",
    "name": "Min Dark",
    "type": "dark",
    "import": (() => import('shiki/themes/min-dark.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "min-light",
    "name": "Min Light",
    "type": "light",
    "import": (() => import('shiki/themes/min-light.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "monokai",
    "name": "Monokai",
    "type": "dark",
    "import": (() => import('shiki/themes/monokai.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "nord",
    "name": "Nord",
    "type": "dark",
    "import": (() => import('shiki/themes/nord.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "one-dark-pro",
    "name": "One Dark Pro",
    "type": "dark",
    "import": (() => import('shiki/themes/one-dark-pro.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "poimandres",
    "name": "Poimandres",
    "type": "dark",
    "import": (() => import('shiki/themes/poimandres.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "rose-pine",
    "name": "Rose Pine",
    "type": "dark",
    "import": (() => import('shiki/themes/rose-pine.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "rose-pine-dawn",
    "name": "Rose Pine Dawn",
    "type": "light",
    "import": (() => import('shiki/themes/rose-pine-dawn.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "rose-pine-moon",
    "name": "Rose Pine Moon",
    "type": "dark",
    "import": (() => import('shiki/themes/rose-pine-moon.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "slack-dark",
    "name": "Slack Dark",
    "type": "dark",
    "import": (() => import('shiki/themes/slack-dark.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "slack-ochin",
    "name": "Slack Ochin",
    "type": "light",
    "import": (() => import('shiki/themes/slack-ochin.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "solarized-dark",
    "name": "Solarized Dark",
    "type": "dark",
    "import": (() => import('shiki/themes/solarized-dark.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "solarized-light",
    "name": "Solarized Light",
    "type": "light",
    "import": (() => import('shiki/themes/solarized-light.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "vitesse-black",
    "name": "Vitesse Black",
    "type": "dark",
    "import": (() => import('shiki/themes/vitesse-black.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "vitesse-dark",
    "name": "Vitesse Dark",
    "type": "dark",
    "import": (() => import('shiki/themes/vitesse-dark.json')) as unknown as DynamicThemeReg
  },
  {
    "id": "vitesse-light",
    "name": "Vitesse Light",
    "type": "light",
    "import": (() => import('shiki/themes/vitesse-light.json')) as unknown as DynamicThemeReg
  }
]

export type BuiltinTheme = 'dark-plus' | 'dracula' | 'dracula-soft' | 'github-dark' | 'github-dark-dimmed' | 'github-light' | 'light-plus' | 'material-theme' | 'material-theme-darker' | 'material-theme-lighter' | 'material-theme-ocean' | 'material-theme-palenight' | 'min-dark' | 'min-light' | 'monokai' | 'nord' | 'one-dark-pro' | 'poimandres' | 'rose-pine' | 'rose-pine-dawn' | 'rose-pine-moon' | 'slack-dark' | 'slack-ochin' | 'solarized-dark' | 'solarized-light' | 'vitesse-black' | 'vitesse-dark' | 'vitesse-light'

export const bundledThemes = Object.fromEntries(bundledThemesInfo.map(i => [i.id, i.import])) as Record<BuiltinTheme, DynamicThemeReg>
