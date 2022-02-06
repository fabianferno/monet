import { Link } from "react-router-dom";
import { useState } from "react";

export default function Layout(props) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  async function login() {
    try {
      // we will use this provider with web3 library in STEP 5.
      const provider = await window.web3AuthInstance.connect();
      console.log(provider);

      // ⭐️ It will return user's social information if logged in with social login method
      // else it will return empty object.
      setUser(await window.web3AuthInstance.getUserInfo());

      setError(null);
    } catch (error) {
      setError(error.message);
    }
  }

  async function logout() {
    try {
      await window.web3AuthInstance.logout();
      setUser(await window.web3AuthInstance.getUserInfo());
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <section className="bg-dark shadow">
        <div className=" d-flex p-3 justify-content-between align-items-center">
          <Link to="/">
            <h1 className="text-white font-weight-bold mt-2">
              <strong>monet</strong>&trade;
            </h1>
          </Link>

          {!user ? (
            <button
              onClick={login}
              className="btn btn-lg btn-success fw-bold text-capitalize"
            >
              Login
            </button>
          ) : (
            <div className="d-flex align-items-end justify-content-center">
              <p className="h4 fw-normal me-3 text-secondary">
                Hello, <strong>{user.name}</strong>{" "}
                {localStorage.setItem("user", JSON.stringify(user))}
              </p>
              <button
                onClick={logout}
                className="btn btn-lg btn-success  fw-bold font-weight-bold text-capitalize"
              >
                Logout
              </button>
            </div>
          )}
        </div>
        {error && (
          <p className="bg-danger no-select shadow text-start px-3 py-2">
            {error}
          </p>
        )}

        <p className="bg-success no-select shadow text-start px-3 py-2">
          A web3 <strong> business directory</strong> with NFT based business
          ranking. &nbsp;
          <Link className="fw-bold text-black" to="/dashboard">
            Create a listing for your Business
          </Link>
        </p>
      </section>
      <section style={{ minHeight: "70vh" }}>{props.children}</section>
      <section id="footer" className="pt-4 pb-2">
        <div className="d-flex justify-content-center align-items-center">
          <p className="text-center text-muted">
            <small>
              <strong>monet</strong>&trade; MIT License &copy; 2022
            </small>
          </p>
        </div>
      </section>
    </>
  );
}
