import "./specialInfoCard.css"

export default function SpecialInfoCard({artwork, stock, returns, pay, shipping, arrival}) {
  return (
    <div className="specialInfoCard">
      <h3>More info</h3>
      <ul>
        <li><h4>Artwork:</h4> {artwork}</li>
        <li><h4>Stock:</h4> {stock}</li>
        <li><h4>Return:</h4> {returns}</li>
        <li><h4>Pay:</h4> {pay}</li>
        <li><h4>Shipping:</h4>{shipping}</li>
        <li><h4>Arrival:</h4>{arrival}</li>
      </ul>
    </div>
  )
}
