import { useState } from "react"

export const Likes = () => {
  const initst = Math.floor(Math.random() * 100)
  const [likes, setlike] = useState(initst)

  const handlerclick = () => {
    setlike(likes + 1)
  }

  return (
    <button onClick={handlerclick}>{`Likes ${likes}`}</button>
  )
}
