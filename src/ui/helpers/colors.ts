type ColorName =
  | 'default-50'
  | 'default-100'
  | 'default-200'
  | 'default-300'
  | 'default-400'
  | 'default-500'
  | 'default-600'
  | 'default-700'
  | 'default-800'
  | 'default-900'
  | 'default-950'
  | 'neutral-50'
  | 'neutral-100'
  | 'neutral-200'
  | 'neutral-300'
  | 'neutral-400'
  | 'neutral-500'
  | 'neutral-600'
  | 'neutral-700'
  | 'neutral-800'
  | 'neutral-900'
  | 'neutral-950'

const colors: { [key in ColorName]: string } = {
  'default-50': '#f8fafc',
  'default-100': '#f1f5f9',
  'default-200': '#e2e8f0',
  'default-300': '#cbd5e1',
  'default-400': '#94a3b8',
  'default-500': '#64748b',
  'default-600': '#475569',
  'default-700': '#334155',
  'default-800': '#1e293b',
  'default-900': '#0f172a',
  'default-950': '#020617',
  'neutral-50': '#fafafa',
  'neutral-100': '#f5f5f5',
  'neutral-200': '#e5e5e5',
  'neutral-300': '#d4d4d4',
  'neutral-400': '#a3a3a3',
  'neutral-500': '#737373',
  'neutral-600': '#525252',
  'neutral-700': '#404040',
  'neutral-800': '#262626',
  'neutral-900': '#171717',
  'neutral-950': '#0a0a0a',
}

export const color = (colorName: ColorName): string => {
  return colors[colorName]
}
