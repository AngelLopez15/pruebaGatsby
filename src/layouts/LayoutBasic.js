import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
      <h1>{data.site.siteMetadata.title}</h1>
      {children}
    </div>
  )
}

