type LogoItem = {
  src: string
  alt: string
}

type TrustedLogosCardGridProps = {
  logos: LogoItem[]
  sectionClassName: string
  containerClassName: string
  listClassName: string
  cardClassName: string
  imageClassName: string
}

export default function TrustedLogosCardGrid({
  logos,
  sectionClassName,
  containerClassName,
  listClassName,
  cardClassName,
  imageClassName,
}: TrustedLogosCardGridProps) {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <div className={listClassName}>
          {logos.map((logo) => (
            <div key={logo.alt} className={cardClassName}>
              <img src={logo.src} alt={logo.alt} className={imageClassName} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
