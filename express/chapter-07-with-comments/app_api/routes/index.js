const express = require('express');

// Router-level middleware works in the same way as application-level middleware,
// except it is bound to an instance of express.Router().
const router = express.Router();

const ctrlLocations = require('../controllers/locations');
const ctrlReviews = require('../controllers/reviews');

// locations

// router.route(path) - returns an instance of a single route
//    which you can then use to handle HTTP verbs with optional middleware.
//    Use router.route() to avoid duplicate route naming and thus typing errors.

// a middleware sub-stack that handles GET and POST requests to the /locations/ path

router
  .route('/locations')
  .get(ctrlLocations.locationsListByDistance)
  .post(ctrlLocations.locationsCreate);

// a middleware sub-stack that handles GET, PUT, and DELETE requests to the /locations/:locationid path
router
  .route('/locations/:locationid')
  .get(ctrlLocations.locationsReadOne)
  .put(ctrlLocations.locationsUpdateOne)
  .delete(ctrlLocations.locationsDeleteOne);

// reviews
// a middleware sub-stack that handles POST requests to the /locations/:locationid/reviews path
router
  .route('/locations/:locationid/reviews')
  .post(ctrlReviews.reviewsCreate);


// a middleware sub-stack that handles POST requests to the /locations/:locationid/reviews/:reviewid path
router
  .route('/locations/:locationid/reviews/:reviewid')
  .get(ctrlReviews.reviewsReadOne)
  .put(ctrlReviews.reviewsUpdateOne)
  .delete(ctrlReviews.reviewsDeleteOne);

module.exports = router;