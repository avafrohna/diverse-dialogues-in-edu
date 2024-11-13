import logo from '../images/logo.jpg';

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={logo} alt="Logo"/>
      <p>Diverse Dialogues in Education</p>
    </header>
  );
}

export default Header;
