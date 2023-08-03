import React, { useState } from "react";

function Add({ medicines, setMedicines, setIsAdding }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const updatedMedicines = [
      ...medicines,
      { name, description, price, quantity },
    ];
    setMedicines(updatedMedicines);
    setIsAdding(false);
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <label htmlFor="name">Medicine Name</label>
        <input
          type="text"
          required
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          required
          id="name"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          required
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          required
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        ></input>
        <input type="submit" value="Add"></input>
        <input
          type="button"
          value="Cancel"
          onClick={() => setIsAdding(false)}
        ></input>
      </form>
    </div>
  );
}

export default Add;
