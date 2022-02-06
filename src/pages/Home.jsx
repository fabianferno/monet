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
    blockchain.godToken.methods
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
  }, [blockchain.godToken, blockchain.account]);

  return blockchain.account === "" || blockchain.godToken === null ? (
    <Layout>
      <div className="d-flex justify-content-center align-items-center">
        <div className="h1 fw-bold text-white card p-3 rounded-3 bg-dark shadow">
          Connect your wallet
        </div>

        <button
          className="btn btn-primary mt-3 fw-bold"
          onClick={(e) => {
            e.preventDefault();
            dispatch(connect());
          }}
        >
          CONNECT
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
            {[1, 2, 3].map((i) => (
              <div className="card card-body bg-dark rounded me-md-3  p-4 pb-2">
                <h3 className="text-white">Web Development</h3>
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
      </div>
    </Layout>
  );
}
