import clsx from 'clsx'

interface Props {
  children: string
  variant?: 'primary' | 'secondary' | 'outlined'
  fluid?: boolean
  className?: string
}

const options = {
  primary: 'bg-maroon text-mantle',
  secondary: 'bg-crust text-white',
  outlined: 'bg-crust border border-maroon text-maroon',
} as const

const Button = (props: Props) => {
  const classes = clsx(
    'px-4 py-2 rounded-md font-bold hover:bg-opacity-70 duration-300',
    options[props.variant ?? 'primary'],
  )

  return <button class={classes}>{props.children}</button>
}

export default Button
