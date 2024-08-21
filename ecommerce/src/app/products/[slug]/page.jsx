import React from "react";
import axios from "axios";
import Header from "@/app/components/Header";

async function getStaticProps(id) {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  const products = res.data;
  console.log(products, "products");
  return products;
}

export default async function ProductId({ params }) {
  console.log(params.slug, "slug");
  const data = await getStaticProps(params.slug);
  console.log(data, "data");
  const products = Array.isArray(data) ? data : [data];
  return (
    <div>
      <div className="bg-yellow-300 flex justify-between items-center p-6">
        <h1 className="font-bold font text-2xl">Shopping Store</h1>
        <Header></Header>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-svw border bg-gray-200 rounded-lg shadow-md overflow-hidden p-5"
          >
            <img
              className="max-w-full max-h-48 object-cover"
              src={product.image}
              alt={product.title}
            ></img>

            <div>
              <div className="p-4">
                <h3>{product.title}</h3>
              </div>
              <p>{product.description}</p>

              <p>Price: ${product.price}</p>

              {/* <p>Rating: {product.rating.rate}</p>

              <p>Count: {product.rating.count}</p> */}

              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus: ring-blue">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
