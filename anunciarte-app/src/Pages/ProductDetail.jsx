import Button from "../Components/atoms/Button";
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
            <Button style="BlueButton" text="Contact" arrow={false} />
            <Button style="YellowButton" text="Buy" arrow={false}/>
        </div>
        <div>footer</div>
    </div>

  )
}
