import './globals.css'
import { ReactNode } from 'react'

export default function Root({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
