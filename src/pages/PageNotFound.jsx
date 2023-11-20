import { NavLink } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='pageNotFound-container'>
        <h1>👇Page Not Found👇</h1>
        <NavLink to="/">
            Home Page
        </NavLink>
    </div>
  )
}

export default PageNotFound