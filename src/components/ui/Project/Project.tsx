interface Props {
  title: string
  desc: string
  img: string
}

const Project = (props: Props) => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.desc}</p>
      <p>{props.img}</p>
    </div>
  )
}

export default Project
