interface Props {
  title: string
  description: string
  image: string
  class?: string
}

const Project = ({
  title,
  description,
  image,
  class: className = '',
}: Props) => {
  return (
    <a
      aria-label={`Click on the image to read more about ${title}`}
      class={`cursor-pointer glow relative [&_footer]:hover:opacity-100 ${className}`}
      href={`/portfolio/${title.toLowerCase().replace(' ', '-')}`}
    >
      <img
        class="rounded-lg aspect-video object-fill"
        width="900px"
        height="900px"
        alt={'image of '.concat(title)}
        src={image}
      />
      <footer class="absolute flex inset-0 bg-crust/50 p-5 opacity-0 duration-300 ease-linear">
        <div class="mt-auto">
          <h3 class="font-bold text-white mt-3">{title}</h3>
          <p class="text-text">{description}</p>
        </div>
      </footer>
    </a>
  )
}

export default Project
