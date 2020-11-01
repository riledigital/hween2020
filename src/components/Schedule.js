import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const Rsvp = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        query ScheduleQuery {
          allAirtable(filter: { table: { eq: "Events" } }) {
            nodes {
              data {
                Title
                description
              }
            }
          }
        }
      `}
      render={data => {
        const { allAirtable } = data
        const { nodes } = allAirtable
        return (
          <header>
            <h1>Schedule</h1>
            {nodes.map(d => (
              <div>
                <h3>{d.data.Title}</h3>
                <p>{d.data.Description}</p>
              </div>
            ))}
          </header>
        )
      }}
    />
  )
}

export default Rsvp
