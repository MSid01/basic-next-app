import { useRouter } from "next/router";
import { useState } from "react";

const ProductDetails = () => {
  const router = useRouter();
  const { productid } = router.query;
  //router.query returns an object which has productid key which is same as the dynamic route filename

  const [checkbox, setcheckbox] = useState(false);
  const [alertToggle, setAlertToggle] = useState(false);
  //order placing function
  const orderplacer=()=>{
    if(checkbox){
    alert("Your order has placed successfully");
    setAlertToggle(false);
    }
    else{
      setAlertToggle(true);
      // router.push('/');
    }
  }
  return (
    <div>
      <h1>Product {productid} Details paGE</h1>
      <h3>This is programmatic way of navigating to product page</h3>
      <input onChange={(e)=>{setcheckbox(e.target.checked)}} type="checkbox" id="confirm" name="confirmed"/>
      <label htmlFor="confirm">Confirm b4 placing otherwise will be navigated to home page</label><br/>
      <button onClick={()=>orderplacer()} >place order</button>
      {alertToggle && <h3 style={{color:"white",background:"red"}}>asdf</h3>}
    </div>
  );
};
export default ProductDetails;
