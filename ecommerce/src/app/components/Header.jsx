import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div>
      <div className="flex  space-x-5 items-center pr-10 text-lg font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </div>
  );
}

export default Header;
