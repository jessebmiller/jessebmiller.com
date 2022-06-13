import React from 'react'
import { graphql, Link } from 'gatsby'

export default function Menu() {
  return (
    <div className="menu">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

