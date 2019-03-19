import React from "react"
import BackgroundImage from "gatsby-background-image"

const Background = ({ img, styleClass, title, children }) => {
  return (
    <BackgroundImage clasName={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
    </BackgroundImage>
  )
}

export default Background
