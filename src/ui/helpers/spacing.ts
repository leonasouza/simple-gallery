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
  xxl: '28px',
  xxxl: '36px',
  huge: '48px',
  giga: '60px',
}

/**
 * @param value key
 * @returns css size in pixels
 * @example key = pixels
 * nano = 1px
 * tiny = 2px
 * xxxs = 4px
 * xxs = 8px
 * xs = 12px
 * sm = 14px
 * md = 16px
 * lg = 20px
 * xl = 24px
 * xxl = 28px
 * xxxl = 36px
 * huge = 48px
 * giga = 60px
 */

export const spacing = (spacingValue: SpacingValue): string => {
  return spacings[spacingValue]
}
