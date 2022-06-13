import React from 'react'
import Menu from '../components/Menu'

export default function DefaultLayout({ children }) {
  return (
    <div>
      <header>
        <h1 className="jesse-b-miller"><a href="/">Jesse B. Miller</a></h1>
        <Menu />
      </header>
      <div className="content">
        { children }
      </div>
    </div>
  )
}
