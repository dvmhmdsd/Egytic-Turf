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
|__ index.js - the entry point of the app
|__ style.scss - global styles
|
|__ assets/ - contains all the assets
|
|__ contexts/ - contains all the contexts needed by the app
|  |__ language-context.js - contains the language context to control the language entire the app
|
|__ core/ - contains all the basics of the app
|  |__ Reactor.js - the connector of the app
|  |__ container-service-provider.js - the register of all the internal and other service provider
|  |__ router-service-provider.js - internal service provider for routing
|  |__ serviceWorker.js - handles the offline mode of the app
|
|__ modules/ - all the modules of the app
|  |__ app/ 
|  |  |__ component.js
|  |  |__ service-provider.js
|  |  |
|  |  |__ pages/
|  |      |__ about/
|  |      |  |__ components/
|  |      |  |  |__ content-item/
|  |      |  |     |__ index.js
|  |      |  |     |__ style.scss
|  |      |  |  
|  |      |  |__ tests/
|  |      |  |__ index.js
|  |      |
|  |      |__ contact/
|  |      |  |__ components/
|  |      |  |  |__ contact-form/
|  |      |  |  |  |__ index.js
|  |      |  |  |  |__ style.scss
|  |      |  |  |  
|  |      |  |  |__ contact-info/
|  |      |  |     |__ index.js
|  |      |  |     |__ style.scss
|  |      |  |  
|  |      |  |__ tests/
|  |      |  |__ index.js
|  |      |  |__ style.scss
|  |      |  
|  |      |__ gallery/
|  |      |  |__ components/
|  |      |  |  |__ gallery-container/
|  |      |  |     |__ gallery-item/
|  |      |  |     |  |__ index.js
|  |      |  |     |  |__ style.scss
|  |      |  |     |  
|  |      |  |     |__ index.js
|  |      |  |     |__ style.scss
|  |      |  |  
|  |      |  |__ tests/
|  |      |  |__ index.js
|  |      |  |__ style.scss
|  |      |  
|  |      |__ home/
|  |         |__ components/
|  |         |  |__ info/
|  |         |  |  |__ components/
|  |         |  |  |  |__ client/
|  |         |  |  |     |__ index.js
|  |         |  |  |     |__ style.scss
|  |         |  |  |  
|  |         |  |  |__ index.js
|  |         |  |  |__ style.scss
|  |         |  |
|  |         |  |__ intro/
|  |         |  |  |__ index.js
|  |         |  |  |__ style.scss
|  |         |  |
|  |         |  |__ map/
|  |         |  |  |__ index.js
|  |         |  |  |__ style.scss
|  |         |  |
|  |         |  |__ services/
|  |         |  |  |__ components/
|  |         |  |  |  |__ service-item/
|  |         |  |  |     |__ index.js
|  |         |  |  |     |__ style.scss
|  |         |  |  |   
|  |         |  |  |__ index.js
|  |         |  |  |__ style.scss
|  |         |  |
|  |         |  |__ testimonials/
|  |         |     |__ components/
|  |         |     |  |__ testimonial-item/
|  |         |     |     |__ index.js
|  |         |     |     |__ style.scss
|  |         |     |  
|  |         |     |__ index.js
|  |         |     |__ style.scss
|  |         |  
|  |         |__ tests/
|  |         |__ index.js
|  |
|  |__ products/ 
|     |__ routes.js
|     |__ service-provider.js
|     |
|     |__ pages/
|     | 
|     |__ tests/
|
|__ shared/ - all the shared data across the app
   |__ footer/
   |  |__ index.js
   |  |__ style.scss
   |
   |__ layout/ - the layout of the app (navbar && footer)
   |  |__ index.js
   |
   |__ navbar/
   |  |__ index.js
   |  |__ style.scss
   |
   |__ pagePreface/
   |  |__ index.js
   |  |__ style.scss
   |
   |__ utils/ - contains all the global utilities needed by the app
   |  |__ translate.js - the functions handles the translation in collaboration with the `language.json` & `context API`
   |
   |__ language.json - the language reference
   |
   |__ menuList.js - the list of links that will be shown in the navbar or footer
   |
   |__ variables.scss - all the `scss` variables needed by the styles of the app

```
