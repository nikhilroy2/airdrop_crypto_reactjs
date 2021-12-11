import React from "react";
import DesignSectionDot from "../DesignSectionDot/DesignSectionDot";

function IcoDistribution(props) {
  return (
    <div id="IcoDistribution">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-11 col-md-9">
            <div className=" py-3 text-center">
              <DesignSectionDot></DesignSectionDot>
              <h3 className="py-3">Presale</h3>
              <p className="w-75 mx-auto">
                All of this is an effort to alleviate some of the troubles we
                have seen with the current DeFi reflection tokens. We are
                confident that this model and protocol will prevail over the
                outdated reflection tokens for these reasons
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="col_wrapper text-center p-3 p-md-5">
              <h3 className="text-center py-4 py-md-5">Token Allocation</h3>
              <img
                className="w-100"
                src={require("../../assets/images/allocation.png").default}
                alt="allocation"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="col_wrapper p-3 p-md-5">
              <h3 className="text-center py-4 py-md-5">More Token Info</h3>

              <ul className="list-unstyled m-0 p-0 more_token_list">
                <li className="p-3 mb-4 rounded-5">
                  <p className="py-0 my-0">
                    {" "}
                    <img
                      className="px-3"
                      src={
                        require("../../assets/images/token-icon-1.svg").default
                      }
                      style={{ height: "3rem" }}
                      alt="token-icon"
                    />{" "}
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
                <li className="p-3 mb-4 rounded-5">
                  <p className="py-0 my-0">
                    {" "}
                    <img
                      className="px-3"
                      src={
                        require("../../assets/images/token-icon-2.svg").default
                      }
                      style={{ height: "3rem" }}
                      alt="token-icon"
                    />{" "}
                    consectetur adipisicing elit. Perspiciatis, autem?.
                  </p>
                </li>
                <li className="p-3 mb-4 rounded-5">
                  <p className="py-0 my-0">
                    <img
                      className="px-3"
                      src={
                        require("../../assets/images/token-icon-3.svg").default
                      }
                      style={{ height: "3rem" }}
                      alt="token-icon"
                    />{" "}
                    tur adipisicing elit. Perspiciatis,{" "}
                  </p>
                </li>

                <li className="p-3 mb-4 rounded-5">
                  <p className="py-0 my-0">
                    <img
                      className="px-3"
                      src={
                        require("../../assets/images/token-icon-3.svg").default
                      }
                      style={{ height: "3rem" }}
                      alt="token-icon"
                    />{" "}
                    tur adipisicing elit. Perspiciatis,{" "}
                  </p>
                </li>
                <li className="p-3 mb-4 rounded-5">
                  <p className="py-0 my-0">
                    <img
                      className="px-3"
                      src={
                        require("../../assets/images/token-icon-4.svg").default
                      }
                      style={{ height: "3rem" }}
                      alt="token-icon"
                    />{" "}
                    tur adipisicing elit. Perspiciatis,{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IcoDistribution;