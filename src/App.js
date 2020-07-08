import React from "react";
import {
  RecoilRoot,
  useRecoilValue,
  useSetRecoilState,
  useRecoilState
} from "recoil";
import "./index.css";

import {ItemType, wishList, itemFilterState, itemFiltering} from "./store"

const icon = type => {
  if (type === ItemType.API) return "🧑‍💻";
  if (type === ItemType.COMPONENT) return "🔢";
};

const ListItems = () => {
  const listItems = useRecoilValue(itemFiltering);
  const heading = useRecoilValue(itemFilterState);
  const [wishLis, updateWishLis] = useRecoilState(wishList);

  return (
    <div>
    <h1>{heading.toUpperCase()}</h1>
      {listItems.map(item => (
        <div key={item.id}>
          {item.name}, {item.type} {icon(item.type)}
          {heading!=='WISHLIST' ? <span style={{border: '1px solid black'}} onClick={()=>{updateWishLis([item ,...wishLis])}}>
            Add to Cart💖
          </span>: ''}
        </div>
      ))}
    </div>
  );
};

const Navigation = () => {
  const setItemFilterState = useSetRecoilState(itemFilterState);
  return (
    <div className="buttons">
      <button onClick={() => setItemFilterState(ItemType.API)}>API</button>
      <button onClick={() => setItemFilterState("WISHLIST")}>WISHLIST</button>
      <button onClick={() => setItemFilterState(ItemType.COMPONENT)}>COMPONENTS</button>
    </div>
  );
};

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Navigation />
        <ListItems />
      </div>
    </RecoilRoot>
  );
}
