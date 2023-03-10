import type { HTMLAttributes } from 'astro/types'
import clsx from 'clsx'
import { Dynamic } from 'solid-js/web'

interface Props extends HTMLAttributes<'a'> {
  children: string
  variant?: 'primary' | 'secondary' | 'outlined' | 'text'
  size?: 'sm' | 'md'
  fluid?: boolean
  link?: boolean
  hasPadding?: boolean
  class?: string
  iconClass?: string
  icon?: any
}

const Button = ({
  children,
  variant,
  fluid,
  class: className,
  icon,
  link = false,
  size = 'md',
  hasPadding = true,
  iconClass = '',
  href = '',
  ...rest
}: Props) => {
  const options = {
    variants: {
      primary: 'bg-peach text-crust glow',
      secondary: 'bg-crust text-white',
      outlined:
        'glow bg-base border border-peach/50 !text-flamingo hover:text-yellow',
      text: 'text-text glow-text',
    },
    sizes: {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2',
    },
  } as const

  const classes = clsx(
    'inline-flex justify-center items-center group duration-300',
    'rounded-md',
    hasPadding && options.sizes[size],
    options.variants[variant ?? 'primary'],
    fluid && 'w-full',
    className,
  )

  return (
    <Dynamic
      component={link ? 'a' : 'button'}
      class={classes}
      href={href}
      {...rest}
    >
      {icon && <Dynamic class={`my-auto mr-1 ${iconClass}`} component={icon} />}
      {children}
    </Dynamic>
  )
}

export default Button
