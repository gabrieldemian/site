import Button from '../Button'
import { ArrowLeft } from '../icons'

interface Props {
  children?: any
  href?: '/blog' | '/'
}

const GoBack = ({ children = 'Go Back', href = '/' }: Props) => {
  return (
    <Button
      size="sm"
      link
      variant="text"
      href={href}
      icon={ArrowLeft as any}
      class="!px-0"
      iconClass="group-hover:-translate-x-[20%] duration-300"
    >
      {children}
    </Button>
  )
}

export default GoBack
