async function fetchData(){
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
    return data.products;
}

async function Product() {

    let data = await fetchData();
    return (
        <div>
            <h1>Products</h1>
            {
                data.map((item,idx) =>{
                    return (
                    <div className="my-10">
                    <h1 key={idx}>{item.title}</h1>
                    <p>{item.price}</p>
                    <p>{item.brand}</p>
                    </div>
                    )
                })
            }
        </div>
    );
}

export default Product;