const db = require('../models')


// create main Model
const Course = db.courses
const Review = db.reviews

// main work

// 1. create course

const addCourse = async (req, res) => {

    let info = {
        
        title: req.body.title,
        description: req.body.description,
        instructor: req.body.instructor,
        price: req.body.price,
        published: req.body.published ? req.body.published : false
    }

    const course = await Course.create(info)
    res.status(200).send(course)
    console.log(course)

}



// 2. get all courses

const getAllCourses = async (req, res) => {

    let courses = await Course.findAll({})
    res.status(200).send(courses)

}

// 3. get single course

const getOneCourse = async (req, res) => {

    let id = req.params.id
    let course = await Course.findOne({ where: { id: id }})
    res.status(200).send(course)

}

// 4. update Course

const updateCourse = async (req, res) => {

    let id = req.params.id

    const course = await Course.update(req.body, { where: { id: id }})

    res.status(200).send(course)
   

}

// 5. delete course by id

const deleteCourse = async (req, res) => {

    let id = req.params.id
    
    await Course.destroy({ where: { id: id }} )

    res.status(200).send('Course is deleted !')

}

// 6. get published course

const getPublishedCourse = async (req, res) => {

    const courses =  await Course.findAll({ where: { published: true }})

    res.status(200).send(courses)

}

// 7. connect one to many relation Course and Reviews

const getCourseReviews =  async (req, res) => {

    const id = req.params.id

    const data = await Course.findOne({
        include: [{
            model: Review,
            as: 'review'
        }],
        where: { id: id }
    })

    res.status(200).send(data)

}

module.exports = {
    addCourse,
    getAllCourses,
    getOneCourse,
    updateCourse,
    deleteCourse,
    getPublishedCourse,
    getCourseReviews,
    
}