import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section>
      <div
        className="container d-flex align-items-center justify-content-center flex-column"
        style={{ minHeight: "85vh" }}
      >
        <h1
          style={{ fontSize: "5rem" }}
          className="text-black bg-success container text-center p-5 "
        >
          <strong className="ms-3">monet</strong>&trade;
        </h1>
        <p className="bg-primary text-white no-select shadow container text-center px-3 py-2">
          A web3 <strong> business directory</strong> with NFT based business
          ranking.
        </p>

        <p
          style={{ fontSize: "2rem" }}
          className="text-white container text-center p-2 mt-5"
        >
          Hello there! Sign in below to get started.
        </p>

        <div className="d-flex justify-content-around mt-2">
          <Link
            className="mx-3"
            to="/home"
            // onClick={signInWithGitHub}
          >
            <span className="btn btn-primary social-pill mr-5 font-weight-bold text-capitalize">
              Login using Web3Auth
            </span>
          </Link>
        </div>
      </div>

      <hr className="text-secondary" />
      <p
        style={{ fontSize: "0.9rem" }}
        className="text-secondary text-center p-2 mb-3"
      >
        Developed by{" "}
        <a
          href="https://www.fabianferno.tech"
          className="font-weight-bold text-success text-decoration-none"
        >
          Star Labs
        </a>
      </p>
    </section>
  );
}
