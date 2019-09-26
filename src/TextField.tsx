import React, { ChangeEvent, useRef, useState } from 'react'

interface Person {

  firstName : string,
  lastName : string,
}

interface Props {
  text : string,
  ok? : boolean,
  i? : number,
  fn? : (bob : string) => string,
  person : Person,
  handleChange : (event: ChangeEvent) => void

}

interface TextNode {

  text : string

}

const TextField : React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = useState<number | null>(5)
  const [text, setText]   = useState<TextNode>({ text: 'Hello' })

  const inputRef = useRef<HTMLInputElement>(null)
  const divRef   = useRef<HTMLDivElement>(null)

  return (
    <div ref={divRef}>
      <input type="text" ref={inputRef} onChange={handleChange}/>
    </div>
  )
}

export default TextField