// log
import store from "../store";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = (account) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      let allServiceNFTs = await store
        .getState()
        .blockchain.serviceNFTToken.methods.getServiceNFTs()
        .call();
      let allOwnerServiceNFTs = await store
        .getState()
        .blockchain.serviceNFTToken.methods.getOwnerServiceNFTs(account)
        .call();

      dispatch(
        fetchDataSuccess({
          allServiceNFTs,
          allOwnerServiceNFTs,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
