import logo from "./assets/images/headerCSLogo.png";

export const Header = () => {
  return (
    <>
      <header>
        <div className="logoimg">
          <img src={logo} alt="logo" />
        </div>

        <div className="login-signup">
          <a href="#">Log In</a>
          <a href="#"><span>Sign Up</span></a>
        </div>
      </header>
    </>
  );
};
