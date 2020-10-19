import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export default function Image() {
  
  // Haciendo peticion de las imagenes usando GraphQL
  // Aunque este componenete asi como esta solo sirve para renderizar una sola imagen
  // por lo que no es muy funcional 
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
    <img src={data.image.sharp.fluid.src} alt="tasa de cafe" />
  )
}
