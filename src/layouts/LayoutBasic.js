import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import "./LayoutBasic.css"

export default function LayoutBasic(props) {
  
  const {children} = props

  // Para poder consultar los metadatos del gatsby config
  const data = useStaticQuery(graphql`
    query SiteTitleQuery{
      site{
        siteMetadata{
          title
          description
          author 
        }
      }
    }
  `)

  return (
    <div>
      <div className="header">
        <h1>{data.site.siteMetadata.title}</h1>
        <div className="menu">
          <Link to="/">Index</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      {children}
    </div>
  )
}

