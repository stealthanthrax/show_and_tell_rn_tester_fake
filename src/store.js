import {
    atom,
    selector
} from 'recoil'

export const ItemType = {
    API: "api",
    COMPONENT: "component"
  };
  
  
export const itemLists = atom({
    key: "itemLists",
    default: [
      {
        id: 1,
        name: "View",
        type: ItemType.COMPONENT,
      },
      {
        id: 2,
        name: "Text",
        type: ItemType.COMPONENT,
      },
      {
        id: 3,
        name: "Alert",
        type: ItemType.API,
      },
      {
        id: 4,
        name: "Keyboard",
        type: ItemType.API,
      }
    ]
  });

  export const wishList = atom({
    key: "wishList",
    default: []
  })
  
  export const itemFilterState = atom({
    key: "itemFilterState",
    default: "api"
  });
  
  export const itemFiltering = selector({
    key: "animalListState",
    get: ({ get }) => {
      const filter = get(itemFilterState);
      const items = get(itemLists);
      if (filter === "WISHLIST") return wishList;
      return items.filter(item => item.type === filter);
    }
  });
  
