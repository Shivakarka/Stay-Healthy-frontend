import { Button } from "antd";
import React from "react";

export default function Payment() {
  return (
    <div className="container ">
      <h1 className="">Pay Booking Fees :</h1>
      <form action="/create-checkout-session" method="POST">
        <button
          type="submit"
          id="checkout-button"
          className="primary-button  text-center"
        >
          Pay Now
        </button>
      </form>
      <img
        className="container"
        src="https://img.freepik.com/free-vector/hand-holding-phone-with-credit-card-screen-man-making-purchase-shopping-paying-online-using-banking-app-flat-vector-illustration-transaction-e-commerce-concept_74855-26014.jpg?w=1380&t=st=1669969786~exp=1669970386~hmac=5f83005e8e148c4fcd81b9ce611b9772845455599f243b01b82700dc1f5cde8f"
      />
    </div>
  );
}
