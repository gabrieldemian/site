import clsx from 'clsx'
import type { JSXElement } from 'solid-js'

interface Props {
  children: JSXElement
  className?: string
  border?: boolean
}

const Card = ({ children, className = '', border = false }: Props) => {
  const classes = clsx(
    'bg-mantle p-4 rounded-lg shadow-md duration-500',
    border && 'border border-red/75',
    className,
  )
  return <div class={classes}>{children}</div>
}

export default Card
