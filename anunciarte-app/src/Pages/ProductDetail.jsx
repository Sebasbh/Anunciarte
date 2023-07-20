import ContactModal from "../Components/atoms/PopUpContact";
import CartModal from "../Components/atoms/PopUpBuy";
import "./productDetail.css";

export default function ProductDetail() {
  return (
   
    <div className="ProductDetail">
        <div>Logo</div>
        <div>ilustración</div>
        <div>
          <h1>type product</h1>
        </div>
        <div>image</div>
        <div>dates product</div>
        <div className="homeButtonsDetail">
            <ContactModal />
            <CartModal />
        </div>
        <div>footer</div>
    </div>

  )
}
