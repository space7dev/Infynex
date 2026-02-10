import type { ElementType, ReactNode } from 'react'

type FaqItem = {
  question: string
  answer: string
}

type FaqSectionButtonItemsProps = {
  items: FaqItem[]
  openIndex: number | null
  onToggle: (index: number) => void
  sectionClassName: string
  containerClassName: string
  listClassName: string
  itemButtonClassName: string
  headerClassName: string
  questionClassName: string
  iconClassName: string
  answerClassName: string
  header?: ReactNode
  headerWrapperClassName?: string
  title?: string
  titleTag?: ElementType
  titleClassName?: string
  subtitle?: string
  subtitleClassName?: string
  questionTag?: ElementType
}

export default function FaqSectionButtonItems({
  items,
  openIndex,
  onToggle,
  sectionClassName,
  containerClassName,
  listClassName,
  itemButtonClassName,
  headerClassName,
  questionClassName,
  iconClassName,
  answerClassName,
  header,
  headerWrapperClassName,
  title,
  titleTag = 'h2',
  titleClassName,
  subtitle,
  subtitleClassName,
  questionTag = 'h3',
}: FaqSectionButtonItemsProps) {
  const TitleTag = titleTag
  const QuestionTag = questionTag

  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        {header ?? (
          <div className={headerWrapperClassName}>
            {title ? <TitleTag className={titleClassName}>{title}</TitleTag> : null}
            {subtitle ? <p className={subtitleClassName}>{subtitle}</p> : null}
          </div>
        )}
        <div className={listClassName}>
          {items.map((item, index) => (
            <button
              key={item.question}
              onClick={() => onToggle(index)}
              className={itemButtonClassName}
            >
              <div className={headerClassName}>
                <QuestionTag className={questionClassName}>{item.question}</QuestionTag>
                <span className={iconClassName}>{openIndex === index ? '-' : '+'}</span>
              </div>
              {openIndex === index ? (
                <p className={answerClassName}>{item.answer}</p>
              ) : null}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
