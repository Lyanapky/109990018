import './App.css';
import { Routes, Route, Outlet, Link, useParams, useSearchParams, useNavigate } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function App() {
  return (
    <div className="App">
            <h2>Welcome to NTUT Web Programming</h2>

        <Sidebar>
        <Menu>
            <MenuItem routerLink={<Link to="/"/>}> Home </MenuItem>
            <MenuItem routerLink={<Link to="search"/>}> Search </MenuItem>
        </Menu>
        </Sidebar>
  <Routes>
    <Route index element={<Home />} />
    <Route path="search" element={<Search />} />

    <Route path="*" element={<NoMatch />} />
  </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search?term">Search</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>This is our home!</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function Search() {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    navigate('/search')
  };

  return (
    <div>
      <h2>Your search term: {searchParams.get('term')}</h2>
      <form onSubmit={handleSubmit}>
      <label for="ss">Search:</label>
        <input name="term"/>
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
}

export default App;
