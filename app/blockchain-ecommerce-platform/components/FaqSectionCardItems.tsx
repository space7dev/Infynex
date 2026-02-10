import type { ElementType, ReactNode } from 'react'

type FaqItem = {
  question: string
  answer: string
}

type FaqSectionCardItemsProps = {
  items: FaqItem[]
  openIndex: number | null
  onToggle: (index: number) => void
  sectionClassName: string
  containerClassName: string
  listClassName: string
  itemClassName: string
  buttonClassName: string
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
  buttonType?: 'button'
}

export default function FaqSectionCardItems({
  items,
  openIndex,
  onToggle,
  sectionClassName,
  containerClassName,
  listClassName,
  itemClassName,
  buttonClassName,
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
  questionTag = 'span',
  buttonType,
}: FaqSectionCardItemsProps) {
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
          {items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={item.question} className={itemClassName}>
                <button
                  type={buttonType}
                  className={buttonClassName}
                  onClick={() => onToggle(index)}
                >
                  <QuestionTag className={questionClassName}>{item.question}</QuestionTag>
                  <span className={iconClassName}>{isOpen ? '-' : '+'}</span>
                </button>
                {isOpen ? (
                  <p className={answerClassName}>{item.answer}</p>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
