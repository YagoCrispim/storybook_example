import { AvatarProps } from './Avatar.types'

export const Avatar = (props: AvatarProps) => {
  const { alt, circle, src, maxWidth } = props

  return (
    <img
      src={src || 'https://via.placeholder.com/300'}
      alt={alt}
      style={{
        maxWidth: `${maxWidth || '500'}px`,
        borderRadius: circle ? '100%' : ''
      }}
    />
  )
}
