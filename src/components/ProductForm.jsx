// src/components/ProductForm.jsx
import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState({ name: '', price: '' });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: '', price: '' });
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <input
        className="form-control mb-2"
        name="name"
        placeholder="Nombre del producto"
        value={form.name}
        onChange={handleChange}
      />
      <input
        className="form-control mb-2"
        name="price"
        type="number"
        placeholder="Precio"
        value={form.price}
        onChange={handleChange}
      />
      <button className="btn btn-success" type="submit">
        {initialData ? 'Actualizar' : 'Agregar'}
      </button>
    </form>
  );
};

export default ProductForm;
