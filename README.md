# WEB103 Project 3 - *RAM Life*

Submitted by: **Chau Cao**

About this web app: **RAM Life is an interactive, isometric web app built on a custom-illustrated campus map of Angelo State University. It makes discovering campus events spatial, visual, and highly interactive by allowing students to click on 3D buildings to see what's happening inside.**

Time spent: **10.3** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [x] **The web app displays a title.**
- [x] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [x] *Note: A non-visual list of links to different locations is insufficient.* 
- [x] **Each location has a detail page with its own unique URL.**
- [x] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [x] An additional page shows all possible events
  - [x] Users can sort *or* filter events by location.
- [x] Events display a countdown showing the time remaining before that event
  - [x] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

- [x] Built a custom 4:3 aspect ratio SVG/PNG canvas map. Instead of flat CSS shapes, locations use tightly-cropped transparent PNG buildings mapped to exact X/Y database coordinates.
- [x] Programmed a staggered "drop-in" board game entrance animation on page load, a gentle breathing/floating effect on map labels, and a 3D isometric jump/drop-shadow effect when buildings are hovered.
- [x] Event cards utilize translucent backgrounds with a backdrop-blur filter to create a frosted glass effect that perfectly complements the off-white application background.
- [x] Implemented Google Fonts (`Fredoka One` for headings, `Inter` for body) to give the app a friendly, indie-game vibe that matches the ASU colors and swapped the default React/Vite logo for a custom inline SVG Ram Emoji (🐏) to match the ASU mascot.
- [x] Seeded the Postgres database with actual ASU campus events (e.g., CLEP Exams, Basketball Showcases, Registration Prep) mapped directly to their real campus locations.

## Video Walkthrough

Here's a walkthrough of implemented required features (old version):

<img src='https://i.imgur.com/lc5SzZ5.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with  GIF tool here [ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

No notes this time.

## License

Copyright [2026] [Chau Cao]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
