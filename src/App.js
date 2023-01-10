import './App.css';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import foods from './foods.json';
import 'antd/dist/reset.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foods);
  const [filteredFoods, setFilteredFoods] = useState(foods);
  const [formVisible, setFormVisible] = useState(true);


  const addFood = (newFood) => {
    setFood([...food, newFood]);
    setFilteredFoods([...food, newFood]);
  };

  const handleSearch = (searchTerm) => {
    const filtered = [...food].filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  const deleteFood = (foodName) => {
    setFood(food.filter((food) => food.name !== foodName));
    setFilteredFoods(filteredFoods.filter((food) => food.name !== foodName));
  };

  const toggleForm = () => {
    setFormVisible(!formVisible);
}

  return (
    <div>
      {formVisible && <AddFoodForm addFood={addFood} />}
      <Button onClick={toggleForm}>{formVisible ? "Hide Form" : "Add New Food"}</Button>
      <Search onSearch={handleSearch} />
      <Divider>
        <h1>Food List</h1>
      </Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredFoods.map((food) => {
          return <FoodBox deleteFood={deleteFood} food={food} />;
        })}
      </Row>
    </div>
  );
}

export default App;
