import { Theme } from 'theme-ui'

export const baseColors = {
  neutral: {
    __default: '#64748b',

    10: '#EEEEEE',
    20: '#F2F3FA',
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#505050',
    960: '#24346C',
  },
}

export const colors: Theme['colors'] = {
  ...baseColors,
}
