import styles from './Picture.module.scss'

type Props = {
  image: {
    sources: Record<string, string>[]
    fallback: string
  }
}

const Picture = ({ image }: Props) => {
  return (
    <picture className={styles.picture}>
      {image.sources.map(({ srcset, type }) => (
        <source key={srcset} srcSet={srcset} type={type} />
      ))}
      <img src={image.fallback} alt="Hero Image" />
    </picture>
  )
}

export default Picture
