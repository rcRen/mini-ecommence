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
    <nav className="mt-12 flex flex-row justify-start items-center flex-wrap">
      {data.length > 0 &&
        data.map((item, index) => (
          <a
            className="mb-3 mx-4 p-2 bg-slate-100 focus:bg-lime-300"
            key={index}
            href={'/category/' + item.slug}
          >
            <span
              className={[
                currentSlug === item.slug ? 'bg-slate-100' : '',
                'text-slate-900 font-mono text-md  ',
              ]}
            >
              {item.title}
            </span>
          </a>
        ))}
    </nav>
  );
};
