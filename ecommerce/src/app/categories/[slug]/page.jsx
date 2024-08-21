import React from "react";
import axios from "axios";
import Link from "next/link";
import Header from "@/app/components/Header";

async function getStaticProps(value) {
  console.log(value);
  const res = await axios.get(
    `https://fakestoreapi.com/products/category/${value}`
  );
  const electronics = res.data;
  console.log(electronics, "ele");

  return electronics;
}

async function Page({ params }) {
  const data = await getStaticProps(params.slug);
  console.log(data, "data");
  return (
    <div>
      <div className="bg-yellow-300 flex justify-between items-center p-6">
        <h1 className="font-bold font text-2xl">Shopping Store</h1>
        <Header></Header>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-8">
        {data.map((product) => (
          <div
            key={product.id}
            className="max-w-s border bg-gray-200 rounded-lg shadow-md overflow-hidden p-5"
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

              <p>Price: ${product.price}</p>

              <p>Rating: {product.rating.rate}</p>

              <p>Count: {product.rating.count}</p>

              <Link href={`/products/${product.id}`}>View Details</Link>

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

export default Page;
