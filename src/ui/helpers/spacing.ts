type SpacingValue =
  | 'nano'
  | 'tiny'
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'huge'
  | 'giga'

const spacings: { [key in SpacingValue]: string } = {
  nano: '1px',
  tiny: '2px',
  xxxs: '4px',
  xxs: '8px',
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '20px',
  xl: '24px',
  xxl: '24px',
  xxxl: '24px',
  huge: '24px',
  giga: '24px',
}

export const spacing = (spacingValue: SpacingValue): string => {
  return spacings[spacingValue]
}
