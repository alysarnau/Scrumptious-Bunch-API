// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for examples
const User = require('../models/user')
const Service = require('../models/service')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET ALL FREELANCER USERS PAGE
router.get('/freelancers', (req, res, next) => {
	User.find( { isFreelancer: true } )
		.then((users) => {
			// `examples` will be an array of Mongoose documents
			// we want to convert each one to a POJO, so we use `.map` to
			// apply `.toObject` to each one
			return users.map((user) => user.toObject())
		})
		// respond with status 200 and JSON of the examples
		.then((users) => res.status(200).json({ users: users }))
		// if an error occurs, pass it to the handler
		.catch(next)
})

// SHOW
// GET SPECIFIC USER / FREELANCER
router.get('/freelancers/:id', (req, res, next) => {
	// req.params.id will be set based on the `:id` in the route
	// will we also need to get all services with them as owner?
	const userId = req.params.id
	// below here is old route
	User.findById(req.params.id)
		.then(handle404)
		// if `findById` is succesful, respond with 200 and "example" JSON
		.then((freelancer) => res.status(200).json({ freelancer: freelancer.toObject() }))
		// if an error occurs, pass it to the handler
		.catch(next)
})


////////////
// SHOW
////////////
//  will not require authentication
// GET SPECIFIC USER / FREELANCER SERVICES
router.get('/freelancer/services/:userId', (req, res, next) => {
	// req.params.id will be set based on the `:id` in the route
	// will we also need to get all services with them as owner?
	const userId = req.params.userId
	console.log('here is the user Id', userId)
	let freelancerArray = [];
	User.findById(userId)
		.then(handle404)
		// this will make it so that the user is always at freelancerArray[0]
		.then((user) => freelancerArray.push(user))
		.then(() => {
			let serviceVariable = Service.find( {owner: userId})
			console.log('here is serviceVariable', serviceVariable)
			return serviceVariable
		})
		// Service.find( {owner: userId})
		.then(handle404)
		.then((services) => {
			freelancerArray.push(services)
			res.status(200).json({ services: freelancerArray })
		})
		.catch(next)
})
///



module.exports = router
