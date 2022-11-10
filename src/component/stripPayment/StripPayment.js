import React, { useState, useEffect } from "react";
import StripCheckout from "react-stripe-checkout";
// const ProductDisplay = () => (
//   <section>
//     <div className="product">
//       <img
//         src="https://i.imgur.com/EHyR2nP.png"
//         alt="The cover of Stubborn Attachments"
//       />
//       <div className="description">
//         <h3>Stubborn Attachments</h3>
//         <h5>$20.00</h5>
//       </div>
//     </div>
//     <form action="/create-checkout-session" method="POST">
//       <button type="submit">Checkout</button>
//     </form>
//   </section>
// );

// const Message = ({ message }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );
function StripPayment() {
  //   const [message, setMessage] = useState("");

  //   useEffect(() => {
  //     // Check to see if this is a redirect back from Checkout
  //     const query = new URLSearchParams(window.location.search);

  //     if (query.get("success")) {
  //       setMessage("Order placed! You will receive an email confirmation.");
  //     }

  //     if (query.get("canceled")) {
  //       setMessage(
  //         "Order canceled -- continue to shop around and checkout when you're ready."
  //       );
  //     }
  //   }, []);

  //   return message ? <Message message={message} /> : <ProductDisplay />;
  const [productDetail, setProductDetail] = useState({
    name: "Cricket",
    amount: "4",
    discription: " ICC world Cup 2022",
  });
  const handleToken = (token, addresses) => {
    console.log(token);
    console.log(addresses);
  };
  return (
    <>
      <StripCheckout
        stripeKey="pk_test_51LkPDVI1ysbNcrp1apmJMegS1kOEOWgTL10ExdL8gdu8dFXBLKjG4FgWM6DD4q7mllFfzgrOGLRZfpZJH8EeZDPP00Htl3j8ov"
        token={handleToken}
        amount={productDetail.amount}
        name={productDetail.name}
        billingAddress
        shippingAddress
      />
    </>
  );
}
export default StripPayment;
