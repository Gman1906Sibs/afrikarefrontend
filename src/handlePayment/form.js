import React from 'react'
import {handlePayfastSession} from "./handlePayfastSession"

const form = async () => {
  const url = await handlePayfastSession()
  const sandboxLink = url.actionURL

  return (
    <div>
        <button><a href={sandboxLink}>Pay</a></button>
    </div>
  )
}

 form()

export default form