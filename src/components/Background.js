import React from "react"
import BackgroundImage from "gatsby-background-image"

const Background = ({ img, styleClass, title, children }) => {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
    </BackgroundImage>
  )
}

Background.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}

export default Background
