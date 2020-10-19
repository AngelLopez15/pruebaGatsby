import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export default function Image() {
  
  // Haciendo peticion de las imagenes usando GraphQL
  const data = useStaticQuery(graphql`
    query{
      image: file(relativePath:{eq:"cafe3.jpg"}){
        sharp:childImageSharp{
          fluid{
            src
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    // <h1>Hola</h1>
    <img src={data.image.sharp.fluid.src} alt="tasa de cafe" />
  )
}
