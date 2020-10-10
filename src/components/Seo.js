import { graphql, useStaticQuery } from 'gatsby'
import { PropTypes } from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

export default function Seo(props) {
  
  const {title, description, meta, lang} = props
  
  const data = useStaticQuery(
    graphql`
      query{
        site{
          siteMetadata{
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || data.site.siteMetadata.description

  // $s es para que agarre el title de la pagina que estamos pasando en las props
  return (
    <Helmet
      title={title} 
      htmlAttributes={{lang}}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name:'description',
          content: metaDescription
        },
        {
          name: "og:title",
          content:title
        },
        {
          name:"og:description",
          content: metaDescription
        },
        {
          name:"og:type",
          content:"website"
        },
        {
          name:"twitter:card",
          content:"summary"
        },
        {
          name:"twitter:creator",
          content:data.site.siteMetadata.author,
        },
        {
          name:"twitter:title", 
          content:title
        },
        {
          name:"twitter:description",
          content: metaDescription
        }
      ].concat(meta)}
    />
  )
}

// En caso de que no mande un prop definimos valores por default
Seo.defaultProps = {
  lang:'es',
  meta:[],
  description:''
}

// Para pedir los metadatos que necesitamos par aun buen SEO
Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description:PropTypes.string,
  lang:PropTypes.string,
  meta:PropTypes.arrayOf(PropTypes.object)
}