import './App.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <a href="#">Dashboard</a>
        </li>

        <li className="nav-item">
          <a href="#">Widgets</a>
        </li>

        <li className="nav-item">
          <button aria-expanded="false">Apps</button>

          <ul className="sub-menu" aria-label="Apps">
            <li><a href="#">Calendar</a></li>
            <li><a href="#">Chat</a></li>
            <li><a href="#">Email</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

const Footer = () => {
  return (
    <footer className='footer'>
      <ul>
        <li><a href="#">👍</a></li>
        <li><a href="#">👎</a></li>
      </ul>
      <ul>
        <li><a href="#">👌</a></li>
        <li><a href="#">✌️</a></li>
      </ul>
      <ul>  
        <li><a href="#">👾</a></li>
        <li><a href="#">🤖</a></li>
      </ul>
      <p>©2026</p>
    </footer>
  )
}

const App = () => {
  return(
    <>
    <Navbar />
    <Footer />
    </>
  )
}
export default App;
