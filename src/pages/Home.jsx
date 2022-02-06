import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";

import Layout from "../components/Layout";

export default function Home() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [loading, setLoading] = useState(false);

  const mintNFT = (_account, _name) => {
    setLoading(true);
    console.log(_account);
    blockchain.serviceNFTs.methods
      .createRandomGod(_name)
      .send({
        from: _account,
        value: blockchain.web3.utils.toWei("0.01", "ether"),
      })
      .once("error", (err) => {
        setLoading(false);
        console.log(err);
      })
      .then((receipt) => {
        setLoading(false);
        console.log(receipt);
        dispatch(fetchData(blockchain.account));
      });
  };

  useEffect(() => {
    if (blockchain.account !== "" && blockchain.serviceNFTToken !== null) {
      dispatch(fetchData(blockchain.account));
    }
  }, [blockchain]);

  return blockchain.account === "" || blockchain.serviceNFTToken === null ? (
    <Layout>
      <div
        style={{ height: "60vh" }}
        className="d-flex  justify-content-center align-items-center"
      >
        <button
          className="h1 text-white p-3 rounded-3 btn btn-dark mt-3 fw-bold shadow"
          onClick={(e) => {
            e.preventDefault();
            dispatch(connect());
          }}
        >
          CONNECT WITH METAMASK{" "}
          <img
            src="/images/metamask.png"
            className="ps-3"
            height="50px"
            alt=""
            srcset=""
          />
        </button>
        <hr className="text-primary" />
        {blockchain.errorMsg !== "" ? <div>{blockchain.errorMsg}</div> : null}
      </div>
    </Layout>
  ) : (
    <Layout>
      <div className="container mt-5 text-secondary">
        <div className="mt-3 text-start">
          <h1 className="mb-4 text-white fw-bold">Find Services</h1>
          <div className="d-flex justify-content-start align-items-start">
            {["Web Development", "Catering", "Plumbing"].map((item, key) => (
              <div
                key={key}
                className="card card-body bg-dark rounded me-md-3  p-4 pb-2"
              >
                <h3 className="text-white">{item}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  maiores molestiae quibusdam aliquid laborum at obcaecati
                  nihil? Expedita officiis voluptatem porro, molestias magnam
                  culpa at ratione, consectetur, nisi nihil nostrum.
                </p>
              </div>
            ))}
          </div>
        </div>

        <hr className="text-secondary" />

        <section>
          <div className="form-group my-4">
            <label htmlFor="inputName" className="text-secondary">
              Search
            </label>
            <input
              type="text"
              className="p-3 d-flex bg-dark w-100 text-white  rounded focus-none"
              id="inputName"
              placeholder="Catering, Plumbing, Web Development, etc"
            />
          </div>

          <div className="list-group">
            <a
              href="#"
              className="list-group-item list-group-item-action bg-dark text-white"
              aria-current="true"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 fw-bold">Simera Web Devs</h5>
                <small className="text-success">Rank #1</small>
              </div>
              <small className="mb-1 fw-normal text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique consequatur laudantium ex tenetur, dolorem libero nisi
                culpa in explicabo quaerat animi maiores. Perspiciatis et
                voluptatem incidunt illo expedita quam similique!
              </small>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
