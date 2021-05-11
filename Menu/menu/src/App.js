import React, { useEffect, useState } from 'react';
import Menu from './menu';
import Category from './Category';
import Axios from 'axios';


function App() {

  const [items,setItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

 
  const allCategories = ['all', ...new Set(menuItems.map((item) => item.category))];
  const [categories, setCategories] = useState([]);

  useEffect(()=>
  {
    Axios.get("http://localhost:4000/items").then((response)=>
    {
      setItems(response.data);
      setMenuItems(response.data);
      setCategories(allCategories);
    })
  },[])

  console.log(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Category categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
