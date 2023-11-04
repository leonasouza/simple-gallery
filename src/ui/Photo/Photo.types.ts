// TYPES
import { IPhoto } from '@types'

export interface PhotoProps {
  isShimmer?: boolean
  photo?: IPhoto
  ref: React.LegacyRef<HTMLImageElement> | undefined
}
