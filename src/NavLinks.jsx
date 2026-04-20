export default function App() {
  return (
    <>
      <header className="text-white px-3 py-2  d-flex justify-content-between  align-items-center header-container bg-dark">
        <h1 className="header ">
          <img src="../react.svg" width="40px" alt="" />
          <span className="logo-name px-3">REACT</span>
        </h1>
        <ul className="anv-links text-white pt-1 d-flex ">
          <li className="nav-items">Home</li>
          <li className="nav-items">About</li>
          <li className="nav-items">Services</li>
        </ul>
      </header>
    </>
  );
}
