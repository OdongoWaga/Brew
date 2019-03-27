import React from "react"
import Title from "../Globals/Title"

const Contact = () => {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/wagaodongo@gmail.com"
            method="POST"
          >
            {/* name */}
            <div className="form-group">
              <label htmlFor="name"> Name </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Jon Jon"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email"> Email </label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="email@email.com"
              />
            </div>
            {/* description */}
            <div className="form-group">
              <label htmlFor="email"> Email </label>
              <textarea
                name="descritpion"
                id="description"
                className="form-control"
                rows="5"
                placeholder="your description here .."
              />

              <button
                type="submit"
                className="btn btn-yellow btn-block text-capitalize mt-5"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
