import React from "react";
import Link from "next/link";
import axios from "axios";
import Header from "./Header";

async function getStaticProps() {
  const res = await axios.get(`https://fakestoreapi.com/products/categories`);
  const electronics = res.data;
  console.log(electronics, "ele");

  return electronics;
}

async function SubHeader() {
  const data = await getStaticProps();
  console.log(data, "data");
  return (
    <div className="flex justify-evenly bg-gray-100 p-4">
      {data.map((categories) => (
        <Link href={`/categories/${categories}`}>{categories}</Link>
      ))}
    </div>
  );
}

export default SubHeader;
