# Egytic Turf

This's the source code of the `Egytic`'s website.

## Table of contents

- [Technologies](#technologies)
- [Install](#install)
- [Structure](#structure)

### Technologies

<a name="technologies">

This project built with `create-react-app` package and consumes the `context API` provided in the latest version in react to allow sharing the state between different components if needed. Also it uses `sass` for styling.

### Install

<a name="install">

To review this repo locally:

- clone this repo `git clone https://github.com/dvmhmdsd/Egytic-Turf.git`
- change directory `cd Egytic-Turf`
- install the packages `npm install`
- serve the application `npm start`

### Structure

<a name="structure">

```
src/
+-- index.js - the entry point of the application
+-- context/ - folder which contains all the contexts used for shared data
+-- core/ - all the starters of the application
|   +-- Reactor.js - the connector of the application
|   +-- container-service-provider.js - provider that provide all methods to service providers of the modules
|   +-- router-service-provider.js - provider that provide routing services to all modules
|   +-- serviceWorker.js - handling offline and PWA concepts of the application
+-- modules/ - the modules of the application
|   +-- home/ - all the components & tests of the home module
|   |   +-- components/ - all the compoennts of the module
|   |   |   +-- intro/ - the introduction of the home page
|   |   |   |   +-- index.js - the logic of the header component which renders a video
|   |   |   |   +-- style.scss - style of the header component
|   |   |   +-- info/ - the main slogan & clients count of the organization
|   |   |   |   +-- index.js - the logic of the info component which renders a video
|   |   |   |   +-- style.scss - style of the info component
|   |   |   +-- map/ - the location of their work and history
|   |   |   |   +-- index.js - the logic of the info component which renders a video
|   |   |   |   +-- style.scss - style of the info component
|   |   |   +-- services/ - renders a list of items that represents the services of the organization
|   |   |   |   +-- service-item/
|   |   |   |   |   +-- index.js - represents the props from `services` parent component
|   |   |   |   |   +-- style.scss - style of the single item
|   |   |   |   +-- index.js - contains the state & the logic of the services and pass it to `service-item`
|   |   |   +-- testimonials/ - renders a slider of items represents testimonials of the clients
|   |   |   |   +-- testimonial-item/
|   |   |   |   |   +-- index.js - represents the props from `testimonials` parent component
|   |   |   |   |   +-- style.scss - style of the single item
|   |   |   |   +-- index.js - containes the state & the logic of the testimonials and pass it to `testimonial-item`
|   |   +-- tests/ - contains all unit & integration tests of the home module
|   |   +-- index.js - the container and entry point of the home page
|   |   +-- service-provider.js - contains all the services needed by the home module
|   +-- gallery/ - all the components & tests of the gallery module
|   |   +-- components/ - all the compoennts of the module
|   |   |   +-- gallery-container/ - renders a list of items of images with preview
|   |   |   |   +-- index.js - passing a state of dynamic paths of images to `gallery-item`
|   |   |   |   +-- gallery-item/ - represents a single image
|   |   +-- tests/ - contains all unit & integration tests of the gallery module
|   |   +-- index.js - the container and entry point of the gallery page
|   |   +-- service-provider.js - contains all the services needed by the gallery module
|   +-- contact/ - all the components & tests of the contact module
|   |   +-- components/ - all the components of the module
|   |   |   +-- contact-form/ - contains the form of the contacting
|   |   |   |   +-- index.js - handles the logic and state of the contact form
|   |   |   |   +-- style.scss - style of the form
|   |   |   +-- contact-info/ - the info of the organization
|   |   |   |   +-- index.js - renders a list of contact info
|   |   |   |   +-- style.scss - style of the contact-info component
|   |   +-- tests/ - contains all unit & integration tests of the contact module
|   |   +-- index.js - the container and entry point of the contact page
|   |   +-- style.scss - the style of the contact page
|   |   +-- service-provider.js - contains all the services needed by the contact module
|   +-- about/ - all the components & tests of the about module
|   |   +-- components/ - all the components of the module
|   |   |   +-- content-item/ - presentational component that represents either `vision` or `mission` or `objective`
|   |   |   |   +-- index.js - handles the logic of the item
|   |   |   |   +-- style.scss - style of the item
|   |   +-- tests/ - contains all unit & integration tests of the about module
|   |   +-- index.js - the container and entry point of the about page
|   |   +-- service-provider.js - contains all the services needed by the about module
+-- shared/ - contains all presentational compoent that shared across multiple compoenents
|   +-- navbar/ - the navbar component
|   |   +-- index.js - the container of the navbar component that renders a logo and the links to pages of the application
|   |   +-- style.scss - styles of the navbar
|   +-- footer/ - the footer component
|   |   +-- index.js - the container of the footer component that renders the logo, info, social list & the location of the organization
|   |   +-- style.scss - styles of the footer
|   +-- pagePreface/ - the preface of every secondery page either the home page
|   |   +-- index.js - the container of the pageHeader component that get props of the location and represents it e.g: if u are in the about page it will represents: /about
|   |   +-- style.scss - styles of the pageHeader
```
