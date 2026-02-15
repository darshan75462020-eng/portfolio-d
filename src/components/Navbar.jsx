const Navbar = ({ dark, setDark }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">Dharshan</h2>

        <button
          className="theme-toggle"
          onClick={() => setDark(!dark)}
        >
          {dark ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
