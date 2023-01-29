import clsx from 'clsx'
import { Dynamic } from 'solid-js/web'

interface Props {
  children: string
  variant?: 'primary' | 'secondary' | 'outlined' | 'text'
  size?: 'sm' | 'md'
  fluid?: boolean
  link?: boolean
  hasPadding?: boolean
  class?: string
  iconClass?: string
  icon?: Element
}

const Button = ({
  children,
  variant,
  fluid,
  class: className,
  icon,
  link,
  size = 'md',
  hasPadding = true,
  iconClass = '',
  ...rest
}: Props) => {
  const options = {
    variants: {
      primary: 'bg-peach text-crust',
      secondary: 'bg-crust text-white',
      outlined: 'bg-base border border-peach/50 text-flamingo',
      text: 'text-text hover:text-yellow hover:!opacity-100',
    },
    sizes: {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2',
    },
  } as const

  const classes = clsx(
    'inline-flex justify-center items-center group duration-300',
    'rounded-md hover:opacity-70',
    hasPadding && options.sizes[size],
    options.variants[variant ?? 'primary'],
    fluid && 'w-full',
    className,
  )

  return (
    <Dynamic component={link ? 'a' : 'button'} class={classes} {...rest}>
      {icon && (
        <Dynamic class={`my-auto mr-1 ${iconClass}`} component={icon as any} />
      )}
      {children}
    </Dynamic>
  )
}

export default Button
