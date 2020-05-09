import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <p>Find me in ./web/src/pages/HomePage/HomePage.js</p>
      <p><Link to={routes.about()}>About</Link></p>
      <p><Link to={routes.home()}>Home</Link></p>
    </div>
  )
}

export default HomePage
