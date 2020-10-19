import { Button } from 'react-bootstrap'
import React from 'react'
import Seo from '../components/Seo'
import LayoutBasic from '../layouts/LayoutBasic'
import './index.scss'
import Image from '../components/Image'

export default function Index() {
  return (
    <LayoutBasic>
      <Seo title = "Hola Home" />
      <h2 className="title">Este es el Home</h2>
      <Button variant="primary" size="lg" block>
        Block level button
      </Button>
      <Image />
    </LayoutBasic>
  )
}
