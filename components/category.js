import React, { useState, useEffect } from 'react';

export default ({ currentSlug }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const API_CATEGORY = '/api/category';

      try {
        const res = await fetch(API_CATEGORY);

        const json = await res.json();

        json.status === 'succeeded' && setData(json.data);
      } catch (e) {}
    })();
  }, []);

  return (
    <div className="relative grid grid-cols-2 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
    {data.length>0 && data.map((item, index) => (
      <a
        key={index}
        href={'/category/' + item.slug}
        className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
      >
        <div className="ml-4">
          <p className="text-base font-medium text-gray-900">
            {item.title}
          </p>
          {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
        </div>
      </a>
    ))}
  </div>
  );
};
