import type { JSXElement } from 'solid-js'

interface Props {
  code: JSXElement
}

const CodeBlock = ({ code }: Props) => {
  console.log('code ', code?.valueOf())
  return <div></div>
}

export default CodeBlock
