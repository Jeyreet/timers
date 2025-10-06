import { type ImgHTMLAttributes } from 'react'
import styles from './Picture.module.scss'

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  image: {
    sources: Array<{ srcset: string; type: `${string}/${string}` }>
    fallback: string
  }
  alt: string
}

const Picture = ({ image, ...props }: Props) => {
  return (
    <picture className={styles.picture}>
      {image.sources.map(({ srcset, type }) => (
        <source className={styles.source} key={srcset} srcSet={srcset} type={type} />
      ))}
      <img src={image.fallback} {...props} />
    </picture>
  )
}

export default Picture
