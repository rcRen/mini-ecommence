import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/product/index';

export default () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);

  const API_CATEGORY = '/api/category';
  const [category, setCategory] = useState({});
  const API_PRODUCT = '/api/products';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    slug &&
      fetch(API_CATEGORY, { method: "POST", body: JSON.stringify({ slug }) })
        .then((res) => res.json())
        .then((data) => {
          console.log('1111',data);
          const resData = data;
          console.log(typeof resData);

          // console.log(resData);
        });

    // slug && fetch(API_PRODUCT)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const arr = data.product;
    //     console.log('222' + slug);
    //     let productList = arr.filter((a) => a.cat === slug);
    //     // console.log(productList);
    //     setProducts(productList);
    //     // setProducts(arr);
    //   });
  }, [slug]);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">{slug}</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
