// import controllers review, courses
const courseController = require('../controllers/courseController.js')
const reviewController = require('../controllers/reviewController')


// router
const router = require('express').Router()


// use routers
router.post('/addCourse', courseController.addCourse)

router.get('/allCourses', courseController.getAllCourses)

router.get('/published', courseController.getPublishedCourse)

// Review Url and Controller

router.get('/allReviews', reviewController.getAllReviews)
router.post('/addReview/:id', reviewController.addReview)

// get product Reviews
router.get('/getCourseReviews/:id', courseController.getCourseReviews)




// courses router
router.get('/:id', courseController.getOneCourse)

router.put('/:id', courseController.updateCourse)

router.delete('/:id', courseController.deleteCourse)

module.exports = router