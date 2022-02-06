import { Link } from "react-router-dom";

export default function Layout(props) {
  return (
    <>
      <section className="bg-dark shadow">
        <div className=" d-flex p-3 justify-content-between align-items-center">
          <Link to="/">
            <h1 className="text-white font-weight-bold mt-2">
              <strong>monet</strong>&trade;
            </h1>
          </Link>
          <button className="btn btn-lg btn-success font-weight-bold text-capitalize">
            Logout
          </button>
        </div>
        <p className="bg-success no-select shadow text-start px-3 py-2">
          A web3 <strong> business directory</strong> with NFT based business
          ranking.
        </p>
      </section>
      <section style={{ minHeight: "80vh" }}>{props.children}</section>
      <section id="footer" className="bg-secondary">
        <div className="d-flex justify-content-center align-items-center">
          <p className="text-center text-muted">
            <small>
              <strong>monet</strong>&trade; &copy; 2020
            </small>
          </p>
        </div>
      </section>
    </>
  );
}
