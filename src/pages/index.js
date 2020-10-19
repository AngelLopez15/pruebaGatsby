import { Button } from 'react-bootstrap'
import React from 'react'
import Seo from '../components/Seo'
import LayoutBasic from '../layouts/LayoutBasic'
import './index.scss'
import ImagenDinamic from '../components/ImagenDinamic'


export default function Index() {
  return (
    <LayoutBasic>
      <Seo title = "Hola Home" />
      <h2 className="title">Este es el Home</h2>
      <Button variant="primary" size="lg" block>
        Block level button
      </Button>
      {/* DEbemos enviar props para que el componete imagen pueda ser dinamico */}
      <ImagenDinamic 
        fileName="cafe3.jpg"
        alt="Taza de café"
      />
      <ImagenDinamic 
        fileName="gatsby-astronaut.png"
        alt="astronauta"
      />
    </LayoutBasic>
  )
}
