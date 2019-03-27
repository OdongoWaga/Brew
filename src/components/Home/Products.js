import React from "react"
import Product from "./Product"
import Title from "../Globals/Title"
import { StaticQuery, graphql } from "gatsby"

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Products = () => {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section classname="py-5">
            <div className="container" />
          </section>
        )
      }}
    />
  )
}

export default Products
