import { type ImgHTMLAttributes } from 'react'
import type { ExtraStyles, Image } from '@types'
import { mergeStyles } from '@utils/mergeStyles'
import defaultStyles from './Picture.module.scss'

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
  alt: string
  image: Image
  extraStyles?: ExtraStyles<typeof defaultStyles>
}

const Picture = (props: Props) => {
  const { image, className, extraStyles, ...imageProps } = props

  const styles = mergeStyles(defaultStyles, extraStyles, { image: className })

  return (
    <picture className={styles.picture}>
      {image.sources.map(({ srcset, type }) => (
        <source className={styles.source} key={srcset} srcSet={srcset} type={type} />
      ))}
      <img className={styles.image} src={image.fallback} {...imageProps} />
    </picture>
  )
}

export default Picture
