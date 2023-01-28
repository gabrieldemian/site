interface Props {
  title: string
  description: string
  image: string
}

const Project = (props: Props) => {
  return (
    <div>
      <a
        aria-label={`Click on the image to read more about ${props.title}`}
        class="cursor-pointer overflow-none"
        href={`/portfolio/${props.title.toLowerCase().replace(' ', '-')}`}
      >
        <img
          class="rounded-lg hover:scale-[105%] duration-300 aspect-video object-cover"
          width="900px"
          height="900px"
          alt={'image of '.concat(props.title)}
          src={props.image}
        />
      </a>
      <h6 class="font-bold text-white mt-3">{props.title}</h6>
      <p>{props.description}</p>
    </div>
  )
}

export default Project
