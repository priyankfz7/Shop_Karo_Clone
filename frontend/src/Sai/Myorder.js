import "./Myorder.css"


let orderData = [
   	{
   		image_fr:
   			"https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBAPPLE-IPHONESUNR52504EEFB6A95/1611144494479_0.jpeg?imwidth=282&impolicy=hq",
   		name: "Samsung Galaxy S20 FE 8 GB 128 GB Cloud Mint",
   		price: "रु41990",
   		status: "Payment Failed",
   		token: Math.floor(Math.random() * 171245789652),
   	},
   	{
   		image_fr:
   			"https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBSAMSUNG-GALAAPNI993020E2B4397E/1618218020020_0..jpg?imwidth=282&impolicy=hq",
   		name: "Vivo Y72 5G 8 GB 128 GB Prism Magic",
   		price: "रु 13999",
   		status: "Payment Failed",
   		token: Math.floor(Math.random() * 171245789652),
   	},
   	{
   		image_fr:
   			"https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBVIVO-Y53S-8-KIAA222802F2233326/1628335579672_0..jpg?imwidth=280&impolicy=hq",
   		name: "Vivo Y53s 8 GB 128 GB Fantastic Rainbow",
   		price: "रु 18490",
   		status: "Payment Failed",
   		token: Math.floor(Math.random() * 171245789652),
   	},
   	{
   		image_fr:
   			"https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBOPPO-F19-PROSHYA862930E590B23E/1624361012233_0.jpg?imwidth=282&impolicy=hq",
   		name: "OPPO F19 6 GB 128 GB Prism Black",
   		price: "रु 19990",
   		status: "Payment Failed",
   		token: Math.floor(Math.random() * 171245789652),
   	},
   ];


function Myorder() {
  return (
    <div>
      <h3 className="order-heading">My orders</h3>
			<div className="order-main">
				<div className="shopping-orders flex">
					<p className="shopping-btn">Shopping Orders</p>
					<p className="deals-btn">Deals</p>
				</div>
				<div className="search-orders flex">
					<img
						width="30px"
						height="30px"
						src="https://t3.ftcdn.net/jpg/01/27/72/28/240_F_127722883_DD4Sp3V30YxvYut3sRsaJqv7TKloEuyH.jpg"
						alt=""
					/>
					<input
						autocomplete="off"
						type="text"
						placeholder="Enter Order ID."
						id="order-id"
					/>
				</div>
			</div>
      <div id="empty-div" style={{padding:"50px"}}>
      <p>No orders found!</p>
        <div>
        
        <img  src="https://www.seekpng.com/png/full/769-7692988_paytm-mall-logo.png" alt="err"/><br/>
        <button>Start Shopping</button>
        </div>
      </div>
      <div className="orders">
      {orderData.map((item)=><div style={{display:"flex",gap:"10px"}}><img height="300px" src={item.image_fr} /><div><h2>{item.name}</h2><h2>{item.price}</h2><h4>Status:{item.status}</h4></div></div>)}
      </div>
    </div>
  );
}

export default Myorder;
