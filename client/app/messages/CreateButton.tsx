'use client'
import React, { ComponentPropsWithoutRef, FC } from 'react'
import axios from 'axios'

type TCreateButtonProps = ComponentPropsWithoutRef<'button'>

const CreateButton: FC<TCreateButtonProps> = ({ children, ...props }) => {
  const { className } = props

  const createMessage = async () => {
    await axios.post('http://localhost:8000/messages/message', {
      username: 'tawmant',
      message: 'hi world! ' + new Date(),
    })
  }

  return (
    <button
      {...props}
      className={`rounded-2xl border border-purple-600 px-10 py-4 font-bold transition-all duration-500 hover:bg-purple-600 hover:text-white ${className}`}
      onClick={createMessage}
    >
      {children}
    </button>
  )
}

export default CreateButton
