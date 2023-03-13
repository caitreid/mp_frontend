# More Please | Frontend

More Please is a static site generator in the style of Link-In-Bio/Linktree for social media apps.


## User Stories
As a user I want to: 
- Login in a create an account with a unique URL (moreplease.link/{username})
- Add a variety of media to my site generator, including: 
    Profile picture, bio, theme settings and links 
- Preview the site as its being generated
- Style the site with unique configuration, including: Background color, Font Family, Font Color, Button Style
- Save everything and create my styled webpage, hosted live

---

<img src="./private/ERD.png"/>

---
## Models
#### Overview
- User has one Profile
- Profile has many Links
- Profile has one Theme

### User
* Password (Text)
* Email (Text)
* Username (Text)

### Profile
* Picture (Image)
* Title (Text)
* Bio (Text)
* Theme (Foreign Key reference)

### Link
* Profile (Foreign Key reference)
* Title (Text)
* URL (Text)
* Visible (Boolean)
* Order (Integer)

### Theme
* Background Color (Text)
* Button Style (Text)
* Button Background Color (Text)
* Button Font Color (Text)
* Shadow Color (Text)
* Font Family
* Font Color

---

## Technologies
* Python/Django Backend for speed of development
* React Frontend for automatic rendering of styled components to the user as webpage is being designed
* AWS S3 Buckets for Image uploading
* Materialize for starter component library
* SASS because it makes everything better.


---

## Wireframe

#### Landing Page
<img src="./private/page_1.png" />

#### Login / Sign up
<img src="./private/page_2.png" />

#### Create Links

<img src="./private/page_3.png" />

#### Create Theme
<img src="./private/page_4.png" />

#### Preview of webpage
<img src="./private/mockup.png" />

---

## Stretch goals

In tackling this project, really want to focus on user experience while meeting all the basic requirements outlined above. I plan on usering testing the app for pain points with friends and family to try to see what could be improved based on their (unguided) navigation of the app. The app should be good enough that friends would want to use it for their own social media profiles.

Stretch goal would be to have paid features that are hidden behind a paywall. I would use Stripe or another payment app to integrate users as "premium" subscribers and actually get $$ for this service.

## Sass Script 

Run from top directory

`sass --watch src/sass/styles.scss:src/css/styles.css`