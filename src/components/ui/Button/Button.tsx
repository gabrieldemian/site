import clsx from 'clsx'
import { Dynamic } from 'solid-js/web'

interface Props {
  children: string
  variant?: 'primary' | 'secondary' | 'outlined' | 'link'
  fluid?: boolean
  className?: string
  icon?: Element
}

const Button = ({
  children,
  variant,
  fluid,
  className,
  icon,
  ...rest
}: Props) => {
  const options = {
    variants: {
      primary: 'bg-peach text-crust',
      secondary: 'bg-crust text-white',
      outlined: 'bg-base border border-peach/50 text-flamingo',
      link: 'text-peach',
    },
  } as const

  const classes = clsx(
    'px-4 py-2 rounded-md hover:opacity-70 duration-300',
    options.variants[variant ?? 'primary'],
    fluid && 'w-full',
    className,
  )

  return (
    <Dynamic
      component={variant === 'link' ? 'a' : 'button'}
      class={classes}
      {...rest}
    >
      {icon && <Dynamic class="mr-1" component={icon as any} />}
      {children}
    </Dynamic>
  )
}

export default Button
