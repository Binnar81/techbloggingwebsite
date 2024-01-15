import {Link} from 'react-router-dom';

const Missing = () => {
  return (
    <main className="Missing">
      <h1>Page not found</h1>
      <p> well, that's a disappointing</p>
      <p><Link to='/'>Go Back to our Homepage</Link>
      </p>

    </main>
  )
}

export default Missing