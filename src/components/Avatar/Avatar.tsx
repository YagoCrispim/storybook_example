import { AvatarProps } from './Avatar.types'

export const Avatar = (props: AvatarProps) => {
  const { alt, circle, src } = props

  return (
    <img
      src={src}
      alt={alt}
      className={`${circle ? 'rounded-full' : 'rounded-md'} profile`}
    />
  )
}
