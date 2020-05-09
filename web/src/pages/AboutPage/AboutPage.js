import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
  return (
    <div>
      <h1>AboutPage</h1>
      <p>Find me in ./web/src/pages/AboutPage/AboutPage.js</p>
      <p><Link to={routes.home()}>Home</Link></p>
    </div>
  )
}

export default AboutPage
