# FREELANCR README

## LINK TO HOSTED COMPLETE APP:
<a href="https://scrumptious-freelancr-app.herokuapp.com/">HERE</a>
 
## Pitch
 FREELANCR is the hottest new Freelancing Platform that will blow Fiverr out of the water. 

## Premise
This platform will allow Freelancers to create profiles and list their available services and price points. Users will be able to create profiles, log in, and view all available services, and sign up for them. It’s never been easier to get the services you need at the price you want. 
 
## Team Roles
Alys - Team Manager
Hayden - Front End
Jacob - Back End SEM

## LINK TO CLIENT REPO
<a href='https://github.com/alysvolatile/Scumptious_Bunch_Client'>Client Facing App is found here!</a>

## STRETCH GOALS…
* As a user, I want to be able to search ALL services through a search bar
* As a freelance user, I want to add multiple images to each of my services
* As a user, I want to be able to leave a review (subdocument)
* As a freelancer user, I want to be able to list turnaround times for services that it is applicable for.
* As a user, I want to be able to use Stripe functionality at checkout.

## ERD 
<img src="./images/ERDv2.png" width="600px" alt="ERD" />

## ROUTE TABLES 
* they go here
### USER route table

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/`    | `users#changepw`  |
| DELETE | `/sign-out/`           | `users#signout`   |

### SERVICE route table

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET    | `/view-service`        | `services#view`   |
| POST   | `/create-service`      | `services#create`    |
| PATCH  | `/edit-service/`       | `services#edit`  |
| DELETE | `/delete-service/`     | `services#delete`   |

### STRETCH: COMMENT route table

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET    | `/view-comment`        | `comments#view`   |
| POST   | `/create-comment`      | `comments#create`    |
| PATCH  | `/edit-comment/`       | `comments#edit`  |
| DELETE | `/delete-comment/`     | `comments#delete`   |

## API or Seed Data
* We will be using Seed Data to populate the Users and the Services
* STRETCH GOAL: we will need to implement with Stripe API!
* We will be using 10 sample Users w/o Freelancer access, 5 sample Users w/Freelancer access, and 10 services
