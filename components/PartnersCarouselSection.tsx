export default function PartnersCarouselSection() {
  const partners = [
    { name: "ISO", src: "/iso.webp", width: 146, height: 41 },
    { name: "AWS", src: "/aws-icon.svg", width: 146, height: 41 },
    { name: "OpenAI", src: "/open-ai-icon.svg", width: 146, height: 41 },
    { name: "Fox", src: "/fox.webp", width: 146, height: 41 },
    { name: "Market Watch", src: "/market-watch.webp", width: 146, height: 41 },
    { name: "Google Partner", src: "/google-partner-logo.webp", width: 146, height: 41 },
  ]

  return (
    <section className="py-8 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <div 
                className=" rounded flex items-center justify-center"
                style={{ width: `${partner.width}px`, height: `${partner.height}px`, paddingTop: '0rem'}}
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
