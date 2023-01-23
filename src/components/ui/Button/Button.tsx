interface Props {
  children: string
}

const Button = (props: Props) => {
  return (
    <button class="px-4 py-2 bg-maroon rounded-md text-mantle font-bold hover:bg-opacity-70 duration-300 ${className}">
      {props.children}
    </button>
  )
}

export default Button
