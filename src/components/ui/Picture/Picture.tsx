import { type HTMLAttributes, type ImgHTMLAttributes } from 'react'
import type { ExtraStyles } from '@types'
import { mergeStyles } from '@utils/mergeStyles'
import defaultStyles from './Picture.module.scss'

type Props = HTMLAttributes<HTMLPictureElement> & {
  image: {
    sources: Array<{ srcset: string; type: `${string}/${string}` }>
    fallback: string
  }
  imageProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, 'className' | 'src'>
  extraStyles?: ExtraStyles<typeof defaultStyles>
}

const Picture = (props: Props) => {
  const { image, imageProps: { alt, ...imageRestProps } = {}, className, extraStyles = {}, ...pictureProps } = props

  const styles = mergeStyles(defaultStyles, extraStyles, { picture: className })

  return (
    <picture className={styles.picture} {...pictureProps}>
      {image.sources.map(({ srcset, type }) => (
        <source className={styles.source} key={srcset} srcSet={srcset} type={type} />
      ))}
      <img className={styles.image} src={image.fallback} alt={alt || ''} {...imageRestProps} />
    </picture>
  )
}

export default Picture
