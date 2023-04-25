import "../App.css";
function Price(){
  return <div className="Price">
    <h5>PRICE</h5>
    <div>
      <div>
        <input htmlFor="Rs.124 to Rs. 3793" type="checkbox" />
        <label id="Rs.124 to Rs. 3793">Rs.124 to Rs. 3793</label>
      </div>
      <div>
        <input htmlFor="Rs.3793 to Rs. 7462" type="checkbox" />
        <label id="Rs.3793 to Rs. 7462">Rs.3793 to Rs. 7462</label>
      </div>
      <div>
        <input htmlFor="Rs.7462 to Rs. 11131" type="checkbox" />
        <label id="Rs.7462 to Rs. 11131">Rs.7462 to Rs. 11131</label>
      </div>
      <div>
        <input htmlFor="Rs.11131 to Rs. 14800" type="checkbox" />
        <label id="Rs.11131 to Rs. 14800">Rs.11131 to Rs. 14800</label>
      </div>
    </div>
  </div> 
}

export default Price;