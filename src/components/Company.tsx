import React from 'react';

import config from '../config/index.json';

const Company = () => {
  const { features } = config;
  const { title, subtitle, description, items: featuresList } = features;

  return (
    <div className={`py-12 bg-background`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-600  sm:text-2xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-6xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div>
              <p className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-600 sm:text-2xl">
                Vision
              </p>
              <p className="text-gray-600">
                EELAB® is conceptualized to develop sustainable climate-smart
                Agri chain Models supporting rural, marginal farmers and vendors
                through a targeted and professional approach and gain economic
                viability as a company.
              </p>
            </div>
            <div>
              <p className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-600 sm:text-2xl">
                Mission
              </p>
              <p className="text-gray-600">
                To achieve a carbon sequestrated production and strengthen the
                supply chain for Agri input and output and, in turn, make
                farming more organized and professional for Indian farmers.
              </p>
              <ul className="list-disc ml-4">
                <li className="text-gray-600">
                  Enhancing agricultural productivity sustainably{' '}
                </li>
                <li className="text-gray-600">
                  Reduce and forecast shocks at all levels of the chain{' '}
                </li>
                <li className="text-gray-600">
                  Reducing greenhouse gas emissions and increasing carbon
                  sequestration where possible
                </li>
                <li className="text-gray-600">
                  Make every person in the chain from farmers to customers
                  climate warriors
                </li>
              </ul>
            </div>
          </dl>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4`}
                  >
                    <img
                      className={`inline-block h-full w-6 rounded-full`}
                      src={feature.icon}
                      alt={feature.name}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                  <a
                    aria-label="linkedin"
                    href={feature.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="fill-current text-gray-800 dark:text-white hover:text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Company;
