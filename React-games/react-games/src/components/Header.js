import "./Header.css";

const Header = (props) => {
  return (
    <header className="Header">
      <nav className="Header-Links">
        <h1>Welcome to the {props.name} games!!!</h1>
      </nav>
    </header>
  );
};

export default Header;
