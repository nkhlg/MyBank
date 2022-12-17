import React from "react";
import { Outlet } from "react-router-dom";
import "./WithdrawDeposit.css"
// import { Link } from "react-router-dom";
function Withdraw() {
    return (
        <>
            <div className="withdrawDeposit">
                <div className="container">
                    <form>
                    <div className="form">
                            <label className="account">Acc No</label>
                            <input className="input" type="text" value="172364735476" disabled></input>
                        </div>
                        <div className="form">
                            <label className="balance">Balance</label>
                            <input className="input" type="text" value="200" disabled></input>
                        </div>
                        <div className="form">
                            <label className="amount">Amount</label>
                            <input className="input" type="text"></input>
                        </div>
                        <div className="form">
                            <button className="btn withdrawbtn">Withdraw</button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </>
    );

}

export default Withdraw;