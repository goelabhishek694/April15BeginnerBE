import React, { useCallback, useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Mango']);

  const removeItem = useCallback((itemToRemove) => {
    setItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>
          {item} 
          <button onClick={() => removeItem(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;