import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import AddCourse from './screens/AddCourse'
import EditCourse from './screens/EditCourse'
import CourseDetail from './screens/CourseDetail'
import ShowCourses from './screens/ShowCourses'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/addCourse' component={AddCourse} />
        <Route exact path='/Courses' component={ShowCourses} />
        <Route exact path='/course/edit/:id' component={EditCourse} />
        <Route exact path='/course/:id' component={CourseDetail} />
      </Switch>
    </Router>
  )
}

export default App