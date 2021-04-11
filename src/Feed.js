import React from "react";
import "./Feed.css";
import SearchResult from "./SearchResult";

function Feed() {
  return (
    <div className="feed">
      <div className="item__aggregate">
        <p>Electronics</p>
        <button>12</button>
      </div>
      <SearchResult
        img="https://soko.fra1.digitaloceanspaces.com/TestImg/5db7c954-da22-4273-b5c1-31d752e8e5e8.jpg"
        title="Steppers"
        price="UGX 185,000"
        btn="+Add"
      />
      <SearchResult
        img="https://soko.fra1.digitaloceanspaces.com/TestImg/8bd67a58-6137-4743-a07a-08a030bc3cfc.jpg"
        title="Classic Milk"
        price="UGX 114,000"
        btn="+Add"
        priceSlash="UGX 148,000"
      />
      <SearchResult
        img="https://soko.fra1.digitaloceanspaces.com/TestImg/d4f3afb9-87f5-4f62-9b97-0ff11bd3aba5.jpg"
        title="Pendants"
        price="UGX 10,000"
        btn="+Add"
      />
      <SearchResult
        img="https://soko.fra1.digitaloceanspaces.com/TestImg/fca016b4-e42e-4080-bc28-3eb977152777.jpg"
        title="Fruit Sea Salt Scrub"
        price="UGX 70,000"
        btn="+Add"
      />
      <SearchResult
        img="https://soko.fra1.digitaloceanspaces.com/TestImg/b01fc8e2-c76d-47a1-9efb-44aeeaf9754b.jpg"
        title="Big Butterfly Stillets"
        price="UGX 40,000"
        btn="+Add"
      />
    </div>
  );
}

export default Feed;
