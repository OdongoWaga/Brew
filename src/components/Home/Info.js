import React from "react"
import { Link } from "gatsby"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className=" col-10 col-sm-8 mx-auto text-center" />

          <p className="lead text-muted mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
            doloribus? Repellat, quae a numquam nulla soluta minus temporibus
            suscipit asperiores esse aliquid deleniti ipsa nesciunt velit
            obcaecati facere odit fugiat voluptas corrupti dolores qui excepturi
            laudantium iste neque. Ipsa, nulla laborum! Architecto, incidunt?
            Nisi doloremque eligendi laudantium, praesentium doloribus
            molestiae!
          </p>
          <Link to="/About">
            <button className="btn text-uppercase btn-yellow">
              About Page
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Info
