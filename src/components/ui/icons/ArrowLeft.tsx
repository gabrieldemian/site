interface Props {
  width?: string
  height?: string
  class?: string
  strokeWidth?: number
}

const ArrowLeft = ({
  width = '1.2rem',
  height = '1.2rem',
  class: className = '',
  strokeWidth = 2,
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width={strokeWidth}
      stroke="currentColor"
      width={width}
      height={height}
      class={`inline-block ${className}`}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
      />
    </svg>
  )
}

export default ArrowLeft
