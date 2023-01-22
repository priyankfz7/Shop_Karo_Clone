import "./Products.css"

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



const Products=()=>{
    return( <div id="product_body">
    <div id="top_path">
        <div>Home / Deals Store / <span style={{color:"black"}}>Gift Vouchers</span></div>
    </div>

    <div id="product_container">
        <div id="product_filter">
            <div id="filter_category">
                <i className="fa fa-chevron-left" style={{fontsize:"16px"}}></i>
                Deals For you
            </div>
            <div className="bold">
                <i className="fa fa-chevron-left" style={{fontsize:"16px"}}></i>
                Fashion
            </div>

            <div className="price-range-slider">


                <div id="slider-range" className="range-bar">

                </div>
                <div id="rangevalue">
                    <p className="range-value">
                        <input type="text" id="amount" readonly />
                    <div id="pricevalue"></div>
                    </p>
                </div>
            </div>

            <div id="brands_title">
                <div className="bold">Brands</div>
                <div style={{fontSize:"24px" , color:"gray" , 
                fontWeight:"100"}}>-</div>
            </div>
            <div>
                <div id="vendor">
                    <div id="button1"><input type="checkbox" /></div>
                    <div id="vendor_name">Vouchers</div>
                    <div id="item_count"></div>
                </div>
            </div>
        </div>

        <div id="product_sort_products">
            <div id="product_sort">
                <div><span className="bold" style={{color:"gray"}} id="total"></span></div>
                <div>
                    <select id="sort" onchange="sortData()">
                        <option value='1'>Sort by Popular</option>
                        <option value='ltoh'>Low To High Price</option>
                        <option value='htol'>High To Low Price</option>

                    </select>
                </div>


            </div>
            <div id="product_products">
                {orderData.map((item)=><div className="product_div"><img height="200px" src={item.image_fr} /></div>)}
            </div>
        </div>

    </div>

</div>)
}

export default Products