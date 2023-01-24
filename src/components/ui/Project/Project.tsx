interface Props {
  title: string
  desc: string
  img: string
}

const Project = (props: Props) => {
  return (
    <div>
      <a
        class="cursor-pointer overflow-none"
        href={`/portfolio/${props.title.toLowerCase().replace(' ', '-')}`}
      >
        <img
          class="rounded-lg hover:scale-[105%] duration-300 aspect-video object-cover"
          width="900px"
          height="900px"
          src={props.img}
        />
      </a>
      <h6 class="font-bold text-white">{props.title}</h6>
      <p>{props.desc}</p>
    </div>
  )
}

export default Project
