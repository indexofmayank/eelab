import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Solutions = () => {
  const { product } = config;
  const [firstItem, secondItem, thirdItem, forthItem, lastItem] = product.items;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-600`}>{firstItem?.description}</p>
            <ul className={'list-disc ml-4'}>
              {firstItem?.descriptions?.map((data) => (
                <li className={'text-gray-600'} key={data}>
                  {data}
                </li>
              ))}
            </ul>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{secondItem?.description}</p>
              <ul className={'list-disc ml-4'}>
                {secondItem?.descriptions?.map((data) => (
                  <li className={'text-gray-600'} key={data}>
                    {data}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {thirdItem?.title}
            </h3>
            <p className={`text-gray-600`}>{thirdItem?.description}</p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={thirdItem?.img}
              alt={thirdItem?.title}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={forthItem?.img}
              alt={forthItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {forthItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>
                <ul className={'list-disc ml-4'}>
                  {forthItem?.descriptions?.map((data) => (
                    <li key={data} className={'text-gray-600'}>
                      {data}
                    </li>
                  ))}
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {lastItem?.title}
            </h3>
            <p className={`text-gray-600`}>
              <ul className={'list-disc ml-4'}>
                {lastItem?.descriptions?.map((data) => (
                  <li key={data} className={'text-gray-600'}>
                    {data}
                  </li>
                ))}
              </ul>
            </p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img className="h-6/6" src={lastItem?.img} alt={lastItem?.title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
