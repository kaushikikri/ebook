import { useLocation } from "react-router-dom";

import { useTitle } from "../../hook";

import { OrderSuccess, OrderFail } from "./components";


export const OrderPage = () => {
  useTitle("Order Summary");

  const { state } = useLocation();


  return (
    <>
      {state ?
        (state.status ? <OrderSuccess data={state.data} /> : <OrderFail />)
        : <OrderFail />
      }

    </>
  )
}
