import React from "react";
import Link from "next/link";
import Head from "next/head";

const category = () => {
  return (
    <>
        <Head>
            <title>Category</title>
        </Head>
        <h1 className="text-3xl font-bold underline">
            This is index of category
        </h1>
        <h1 className="text-3xl font-bold underline">
            <Link href={{
                pathname:'/category/vegetable',
               }}>Vegetables</Link>
        </h1>
        <h1 className="text-3xl font-bold underline">
            <Link href='/category/meat'>Meats</Link>
        </h1>
        <h1 className="text-3xl font-bold underline">
            <Link href='/category/fruit'>Fruits</Link>
        </h1>
    </>
  )
}

export default category;