import React, { useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Card = ({ Name, Notes, imgUrl }) => {
  debugger
  return (
    <div className="hover-emphasis card border">
      <h3 className="guestnames">{Name}</h3>
      {imgUrl ? <img className="user-photo" src={imgUrl} /> : null}

      {/* <Img alt="User image" fluid={img} /> */}
      <p class="notes">{Notes}</p>
    </div>
  )
}

const Rsvp = ({ data }) => {
  const [form, setForm] = useState(false)
  const toggleForm = () => {
    setForm(!form)
  }
  return (
    <StaticQuery
      query={graphql`
        query RsvpQuery {
          allAirtable(filter: { table: { eq: "RSVP" } }) {
            nodes {
              data {
                Name
                Notes
                Status
                Attachments {
                  id
                  raw {
                    id
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={graph => {
        const { allAirtable } = graph
        const nodes = allAirtable.nodes

        return (
          <div>
            <h2>GUEST BOOK</h2>
            <p>
              <a href="https://airtable.com/shrVrHgIGeIAUZX1f" target="_blank">
                Sign the guestbook!
              </a>
            </p>
            <div className="grid-container">
              {nodes.map(d => {
                let { data: nodeData } = d
                let theUrl = nodeData.Attachments
                  ? nodeData.Attachments.raw[0].url
                  : null
                return <Card {...d.data} imgUrl={theUrl} />
              })}
            </div>
          </div>
        )
      }}
    />
  )
}

export default Rsvp
