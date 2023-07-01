import React from 'react';
import Header from '../components/Header';
import Head from 'next/head';

const FAQ = () => {
  return (
    <>
      <Head>
        <title>FAQ</title>
        <meta
          name="Frequently Asked Questions"
          content="Generated by QueryIQ"
        />
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <main className="max-h-full w-screen min-w-full max-w-full bg-white">
        <Header />
        <div className="px-16">
          <div className="mt-12 rounded-lg bg-white p-4 py-8 shadow-xl shadow-med">
            <h4 className="text-center text-4xl font-bold uppercase tracking-widest text-gray-800">
              FAQ
            </h4>
            <p className="mt-2 text-center text-sm text-gray-600">
              Here are some of the frequently asked questions
            </p>
            <div className="mt-12 space-y-12 px-2 xl:px-16">
              <div className="mt-4 flex">
                <div>
                  <div className="flex h-16 items-center border-l-4 border-blue-600">
                    <span className="px-4 text-4xl text-blue-600">Q.</span>
                  </div>
                  <div className="flex h-16 items-center border-l-4 border-gray-400">
                    <span className="px-4 text-4xl text-gray-400">A.</span>
                  </div>
                </div>
                <div>
                  <div className="flex h-16 items-center">
                    <span className="text-lg font-bold text-blue-600">
                      What are performance metrics for SQL database queries?
                    </span>
                  </div>
                  <div className="flex items-center py-2">
                    <span className="text-gray-500">
                      Performance metrics for SQL database queries are
                      measurements used to assess the efficiency and
                      effectiveness of query execution. They include metrics
                      such as query execution time, query throughput, CPU usage,
                      memory usage, disk I/O, and more.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex">
                <div>
                  <div className="flex h-16 items-center border-l-4 border-blue-600">
                    <span className="px-4 text-4xl text-blue-600">Q.</span>
                  </div>
                  <div className="flex h-16 items-center border-l-4 border-gray-400">
                    <span className="px-4 text-4xl text-gray-400">A.</span>
                  </div>
                </div>
                <div>
                  <div className="flex h-16 items-center">
                    <span className="text-lg font-bold text-blue-600">
                      Why do performance metrics for database queries matter?
                    </span>
                  </div>
                  <div className="flex items-center py-2">
                    <span className="text-gray-500">
                      Performance metrics for database queries matter because
                      they provide insights into system efficiency, user
                      experience, scalability, cost optimization,
                      troubleshooting, optimization opportunities, SLA
                      compliance, and enable continuous improvement. Monitoring
                      and analyzing these metrics help maintain a
                      well-performing database system and ensure that it meets
                      the needs of users and applications.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex">
                <div>
                  <div className="flex h-16 items-center border-l-4 border-blue-600">
                    <span className="px-4 text-4xl text-blue-600">Q.</span>
                  </div>
                  <div className="flex h-16 items-center border-l-4 border-gray-400">
                    <span className="px-4 text-4xl text-gray-400">A.</span>
                  </div>
                </div>
                <div>
                  <div className="flex h-16 items-center">
                    <span className="text-lg font-bold text-blue-600">
                      What is query execution time, and how can I optimize it?
                    </span>
                  </div>
                  <div className="flex items-center py-2">
                    <span className="text-gray-500">
                      Query execution time refers to the duration it takes for a
                      query to complete. To optimize query execution time, you
                      can consider strategies such as indexing the appropriate
                      columns, rewriting or optimizing the query logic,
                      denormalizing data for better performance, or tuning the
                      database configuration.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex">
                <div>
                  <div className="flex h-16 items-center border-l-4 border-blue-600">
                    <span className="px-4 text-4xl text-blue-600">Q.</span>
                  </div>
                  <div className="flex h-16 items-center border-l-4 border-gray-400">
                    <span className="px-4 text-4xl text-gray-400">A.</span>
                  </div>
                </div>
                <div>
                  <div className="flex h-16 items-center">
                    <span className="text-lg font-bold text-blue-600">
                      What is query throughput, and how can I improve it?
                    </span>
                  </div>
                  <div className="flex items-center py-2">
                    <span className="text-gray-500">
                      Query throughput refers to the number of queries that can
                      be processed within a given timeframe. To improve query
                      throughput, you can optimize the database schema, utilize
                      caching mechanisms, distribute data across multiple
                      servers, parallelize query execution, and implement query
                      optimization techniques.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex">
                <div>
                  <div className="flex h-16 items-center border-l-4 border-blue-600">
                    <span className="px-4 text-4xl text-blue-600">Q.</span>
                  </div>
                  <div className="flex h-16 items-center border-l-4 border-gray-400">
                    <span className="px-4 text-4xl text-gray-400">A.</span>
                  </div>
                </div>
                <div>
                  <div className="flex h-16 items-center">
                    <span className="text-lg font-bold text-blue-600">
                      What is query optimization, and how can I optimize my SQL
                      queries?
                    </span>
                  </div>
                  <div className="flex items-center py-2">
                    <span className="text-gray-500">
                      Query optimization involves improving the efficiency of
                      SQL queries by selecting optimal execution plans. You can
                      optimize SQL queries by using appropriate indexing,
                      rewriting complex queries, avoiding unnecessary joins or
                      subqueries, utilizing query hints, and analyzing and
                      tuning the database configuration.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex">
                <div>
                  <div className="flex h-16 items-center border-l-4 border-blue-600">
                    <span className="px-4 text-4xl text-blue-600">Q.</span>
                  </div>
                  <div className="flex h-16 items-center border-l-4 border-gray-400">
                    <span className="px-4 text-4xl text-gray-400">A.</span>
                  </div>
                </div>
                <div>
                  <div className="flex h-16 items-center">
                    <span className="text-lg font-bold text-blue-600">
                      What are some common performance issues with SQL queries,
                      and how can I address them?
                    </span>
                  </div>
                  <div className="flex items-center py-2">
                    <span className="text-gray-500">
                      Common performance issues with SQL queries include slow
                      query execution, high resource utilization, lack of
                      indexing, inefficient join operations, and suboptimal
                      query plans. You can address these issues by optimizing
                      query logic, adding or modifying indexes, rewriting
                      queries, and monitoring resource usage.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-bold text-white">FAQ</h1>
              <p className="mt-4 text-lg text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tristique sem ligula, non cursus mi malesuada ut. Quisque sed urna
                non metus accumsan posuere. Vestibulum sit amet lectus rutrum,
                tincidunt leo nec, volutpat metus. In venenatis, libero sit amet
                tristique pellentesque, arcu erat iaculis purus, ac sagittis turpis
                elit eu neque. Integer pellentesque arcu in consequat malesuada.
                Aliquam erat volutpat. Vestibulum posuere lacinia urna, ac luctus
                arcu blandit sed. Sed tempor, dolor ac pretium tristique, ligula
                orci ullamcorper lectus, sit amet tempus neque sem non est. Nulla
                facilisi. Aliquam mollis tristique diam, ut efficitur nulla lacinia
                ut.
              </p>
              <p className="mt-4 text-lg text-gray-300">
                Phasellus ullamcorper sagittis sapien, vel dapibus dolor facilisis
                et. Nulla malesuada felis non maximus lacinia. Phasellus sit amet
                lacus sed nisl aliquam consectetur. Nunc pretium ligula vitae lectus
                interdum, ut efficitur lectus iaculis. Morbi eget sapien sapien. Sed
                eleifend augue elit, ac scelerisque sem egestas sit amet. Sed
                finibus vehicula urna, ut eleifend dui venenatis sed. Aenean
                fringilla, urna id ullamcorper pellentesque, mauris felis tristique
                dolor, ut aliquam orci est sit amet purus. Ut malesuada sem non
                sagittis tincidunt. Vivamus vestibulum vehicula eros nec congue.
                Proin pellentesque elementum malesuada.
              </p>
            </div> */}
      </main>
    </>
  );
};

export default FAQ;
