import logo from './logo.svg';
import './App.css';
import Menu from './menu';
import data from './data';
import Category from './Category'
import { useState } from 'react';


const allCategories =['all',...new Set(data.map((item)=>item.category))];
console.log(allCategories);
function App() {

  const [menuItems,setMenuItems] = useState(data);
  const [categories,setCategories] = useState(allCategories);

  const filterItems = (category)=>
  {
    
    if(category === 'all')
    {
      setMenuItems(data);
      console.log(category);
    }
    else
    {
      const newItems = data.filter((item)=>item.category === category)
      setMenuItems(newItems);
    }

  }

  return (
    <div className="App">
      <header className="App-header">
      <Category filterItems={filterItems} categories={categories}/>
      <Menu data={menuItems} />
      </header>
    </div>
  );
}

export default App;
