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
    <nav class="bg-gray-50 dark:bg-gray-700">
      <div class="max-w-screen-xl px-1 py-3 mx-auto md:px-6">
        <div class="flex items-center">
          <ul class="flex flex-wrap flex-row text-base ">
            {data.length > 0 &&
              data.map((item, index) => (
                <li key={index} className=" mt-4 px-4 border-r border-r-gray-500">
                  <a
                    href={'/category/' + item.slug}
                    class="text-gray-900 dark:text-white hover:underline"
                    aria-current="page"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>

    // <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">

    //   <span className=" flex items-center pl-2.5 mb-5 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
    //     Category
    //   </span>
    //   <ul className="space-y-2 divide-y divide-slate-200">
    //     {data.length > 0 &&
    //       data.map((item, index) => (
    //         <li key={index}>
    //           <a
    //             href={'/category/' + item.slug}
    //             className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    //           >
    //             <span className="ml-3">{item.title}</span>
    //           </a>
    //         </li>
    //       ))}
    //   </ul>
    // </div>
  );
};
