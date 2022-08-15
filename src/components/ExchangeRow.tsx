import React from "react";
import { type ReactNode} from "react";
import Link from "next/link";
import { Exchange } from "src/types";

interface ExchangeProps {
    id: string;
    exchange: Exchange;
    // image: string;
    // exchange.image: Record<string, string> 
    // probably need to write out individual info 
}

// const style = {
//   width={20}
//   height={20}
// }

const ExchangeRow= ({ id, exchange }: ExchangeProps) => {
    // const id = exchange.id;
    console.log(exchange)
  return (
    // does the below line need a key??
    
    <Link href={`/exchanges/${exchange.id}`} id={id}> 
    {/* //   <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark"> */}
      <li>
          {/* <img className="coinlist-image" src={exchange.image as HTMLImageElement} alt="" /> */}
        <img className="coinlist-image" src={exchange.image} alt="" width={20} height={20}/>
        <span>{exchange.id}</span>

        <span
        //   className={
        //     exchange.price_change_percentage_24h < 0
        //       ? "text-danger mr-2"
        //       : "text-success mr-2"
        //   }
        >
          {/* {" "}
          {exchange.price_change_percentage_24h < 0 ? (
            <i className="fas fa-sort-down align-middle mr-1"></i>
          ) : (
            <i className="fas fa-sort-up align-middle mr-1"></i>
          )} */}
          {exchange.country}
        </span>
      </li>
    </Link>
  );
};

export default ExchangeRow;