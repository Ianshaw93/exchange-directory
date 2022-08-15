import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import Exchange from './ExchangeRow';
import coingecko from '../pages/api/coingecko';
import ExchangeRow from './ExchangeRow';
import Link from 'next/link';

const styles = {
  directoryCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
  directoryCardWrapper: `flex items-center justify-between mx-auto max-w-screen-2xl`,
  directoryHead: `py-3 px-6`,
}


const Directory: NextPage = () => {

  const [ exchanges, setExchanges ] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await coingecko.get(`/exchanges/`, {
          params: {
            ids: "",
          },
        });
      const topTenExchangeData = response.data.slice(0,10)
      setExchanges(topTenExchangeData)
    };

    fetchData();
  }, []);

  let counter = 0;
  return (

    <>

      <table className='table-auto w-full text-sm text-left text-gray-500 dark:text-gray-40'>
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Central Exchanges
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Scope the list of the top 10 CEX's below and click the exchange name to read more.</p>
          </caption>
        {/* <div className={styles.directoryCard}>
          <div className={styles.directoryCardWrapper}> */}
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className={styles.directoryHead}>#</th>
              <th scope="col" className={styles.directoryHead}>Exchange</th>
              <th scope="col" className={styles.directoryHead}>Trust Score</th>
              <th scope="col" className={styles.directoryHead}>Country</th>
              <th scope="col" className={styles.directoryHead}>URL</th>
            </tr>
          </thead>
          <tbody>
            {/* <div className='flex'> */}
              
                {exchanges.map((exchange) => {
                  counter += 1;
                  return <ExchangeRow key={exchange.id} exchange={exchange} id={exchange.id} counter={counter}/>
                        })}
            {/* </div> */}
          </tbody>
          {/* </div>
        </div> */}
      </table>
    </>
  )}

export default Directory
