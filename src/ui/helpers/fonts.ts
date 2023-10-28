type SizeValue = 'mini' | 'small' | 'regular' | 'large' | 'title' | 'biggest'

const sizes: { [key in SizeValue]: string } = {
  mini: '10px',
  small: '14px',
  regular: '18px',
  large: '22px',
  title: '26px',
  biggest: '40px',
}

export const fontSize = (size: SizeValue): string => {
  return sizes[size]
}
