import Cart from "@/components/Cart";


async function fetchData(){
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
    return data.products;
}

async function Product() {

    let data = await fetchData();
    return (
        <div>
            <h1 className="text-center text-2xl font-bold">Products</h1>
            {
                data.map((item,idx) =>{
                    return (
                    <div className="my-10" key={idx}>
                    <Cart idx={idx+1}/>
                    <h1>{item.title}</h1>
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