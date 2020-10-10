import { Button } from 'react-bootstrap'
import React from 'react'
import Seo from '../components/Seo'
import LayoutBasic from '../layouts/LayoutBasic'


export default function Index() {
  return (
    <LayoutBasic>
      <Seo title = "Hola Home" />
      <h2>Este es el Home</h2>
      <Button variant="primary" size="lg" block>
        Block level button
      </Button>
    </LayoutBasic>
  )
}
