import { Divider, Input, Button } from 'antd';
import React, { useState } from 'react';



const AddFoodForm = (props) => {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newFood = {name: name, image: image, calories: calories, servings: servings}
        props.addFood(newFood);
        setName('');
        setImage('');
        setCalories('');
        setServings('');
    }

    return(
        <form onSubmit={handleSubmit}>
      <Divider><h1>Add Food Entry</h1></Divider>

      <label>Name</label>
      <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Image</label>
      <Input placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)} />

      <label>Calories</label>
      <Input placeholder="Calories" value={calories} onChange={(e) => setCalories(e.target.value)} />

      <label>Servings</label>
      <Input placeholder="Servings" value={servings} onChange={(e) => setServings(e.target.value)} />

      <button style={{margin:"10px"}} type="submit">Create</button>
    </form>
    )
}


export default AddFoodForm