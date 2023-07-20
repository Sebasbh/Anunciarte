import CartModal from "../Components/atoms/PopUpBuy";
import ContactModal from "../Components/atoms/PopUpContact";
import "./productDetail.css";

export default function ProductDetail() {
  return (
   
    <div className="ProductDetail">
        <div>LOGO</div>
        <div>ilustración</div>
        <div>
          <h1>type product</h1>
        </div>
        <div>image</div>
        <div>dates product</div>
        <div className="homeButtons">
            <ContactModal />
            <CartModal />
        </div>
        <div className="items">
          <div>item1</div>
          <div>item2</div>
          <div>item3</div>
        </div>
    </div>

  )
}
