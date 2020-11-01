import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import Rsvp from "../components/Rsvp"
import Schedule from "../components/Schedule"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  let video = useRef(null)
  useEffect(() => {})
  return (
    <Layout>
      <SEO title="Home" />
      <iframe
        ref={video}
        width="560"
        height="50"
        src="https://www.youtube.com/embed/3Rhc-2Aw4DY"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <section className="links">
        <a href="https://www.facebook.com/events/2792740714323844">
          Facebook Event
        </a>
        <a href="https://discord.gg/mkTA7JD">Discord Link</a>
      </section>
      <Rsvp></Rsvp>
      <Schedule />
    </Layout>
  )
}
export default IndexPage
