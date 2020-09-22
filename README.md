# COVID-19 University Response Consolidation (CURECON)
Curecon is an interactive corpus of global university responses to the coronavirus pandemic. The visualizations and research paper aim to assess the impacts of school policy changes on student accessability and wellbeing. 

Built using React, with CSS Modules, CSS Grid, Flexbox. and styled-components. <br/>
Map built using Leaflet.js & Mapbox. Backend powered by Node.js and MySQL.

To run locally: 
- `git pull https://github.com/nkhi/curecon`
- `npm i && npm start`

**Visit it here: http://uofcov.id**

## Features still outstanding:
- Landing Call To Action Text to cycle through multiple languages
- Landing Call To Action "your school" animated underline resembling sharpie/pencil after a short delay
- SchoolsList links (curecon.org/school/{schoolName}) needs to be set up to handle no schoolName part
- About page, School Data Page, Submission Page need to be made
- Submission of form data to DB needs to be configured
- Mobile CSS is not setup for any of the components, need to add page container to handle media querying
