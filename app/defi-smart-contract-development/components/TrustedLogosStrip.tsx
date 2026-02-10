type LogoItem = {
  src: string
  alt: string
}

type TrustedLogosStripProps = {
  logos: LogoItem[]
  sectionClassName: string
  containerClassName: string
  listClassName: string
  imageClassName: string
  loading?: 'lazy' | 'eager'
}

export default function TrustedLogosStrip({
  logos,
  sectionClassName,
  containerClassName,
  listClassName,
  imageClassName,
  loading = 'lazy',
}: TrustedLogosStripProps) {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <div className={listClassName}>
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className={imageClassName}
              loading={loading}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
