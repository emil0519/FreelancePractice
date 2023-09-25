import { useEffect, useRef } from "react";

import tappay from "./tappayStylish";

function Payment() {
  const cardNumberRef = useRef<HTMLInputElement>(null);
  const cardExpirationDateRef = useRef<HTMLInputElement>(null);
  const cardCCVRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    tappay.setupSDK();
    tappay.setupCard(
      cardNumberRef.current,
      cardExpirationDateRef.current,
      cardCCVRef.current
    );
  }, []);
  async function checkout() {
    console.log(tappay.canGetPrime(), "tappay.canGetPrime()");
    // if (!tappay.canGetPrime()) {
    //   window.alert("付款資料輸入有誤");
    //   return;
    // }

    const result: any = await tappay.getPrime();
    console.log(result, "result");
    if (!tappay.canGetPrime()) {
      alert(result.msg);
    }
    // if (result.status !== 0) {
    //   window.alert('付款資料輸入有誤');
    //   return;
    // }
  }

  // useEffect(() => {
  //   console.log("change");
  // }, [changeNumber]);

  return (
    <>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Email"
        />
      </div>
      <div className="">
        <label htmlFor="card-number" className="=">
          卡號
        </label>
        <input
          id="card-number"
          placeholder="**** **** **** ****"
          type="text"
          className="text-black"
          ref={cardNumberRef}
        />
      </div>
      <div className="form-group expiration-date-group">
        <label htmlFor="expiration-date" className="control-label">
          卡片到期日
        </label>
        <input
          id="card-expiration-date"
          placeholder=""
          className="text-black"
          ref={cardExpirationDateRef}
        />
      </div>
      <div className="form-group ccv-group">
        <label htmlFor="ccv" className="control-label">
          卡片後三碼
        </label>
        <input
          id="card-ccv"
          placeholder=""
          className="text-black"
          ref={cardCCVRef}
        />
      </div>
      {/* <button>Pay Now</button> */}

      <button className="" onClick={checkout}>
        Payme
      </button>
    </>
  );
}

export default Payment;
