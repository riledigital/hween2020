# HWEEN 2020 RAVE GUESTBOOK

See live site at https://hweenrave2020.surge.sh/

This site is a **WEB RAVE FLYER** for a virtual event that contains a dynamically generated guestbook that pulls from AirTable.

Built in <24 hours with Gatsby, Airtable, React, and a whole lotta nightcore

Demos the following rapid web dev+deploy workflow:

- Uses Airtable base to store content
- Gatsby fetches data from Airtable
- Gatsby renders out a static page
- Publish to surge.sh

## obscure setup directions

- See directions for `gatsby-airtable-source`; insert keys into the `.env` file
- Create Airtable base with correct schema
- Build + deploy with Surge.sh
