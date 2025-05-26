// src/components/ProductForm.jsx
import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState({ code: '', name: '', price: '', stock: '', stockmin: '', stockmax: '', categoryId: '', mesuarementId:'', state: false });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ code: '', name: '', price: '', stock: '', stockmin: '', stockmax: '', categoryId: '', mesuarementId:'', state: false });
  };

  const handleChangeState = (e) => {
    setForm({ ...form, state: e.target.checked });
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <label className="form-check-label" htmlFor="code">Código</label>
          <input
            className="form-control mb-2"
            id="code"
            name="code"
            placeholder="Código del Producto"
            value={form.code}
            onChange={handleChange}
          />
          </div>
          <div className="col-md-4">
          <label className="form-check-label" htmlFor="name">Nombre</label>
          <input
            className="form-control mb-2"
            id="name"
            name="name"
            placeholder="Nombre del producto"
            value={form.name}
            onChange={handleChange}
          />
          </div>
          <div className="col-md-4">
          <label className="form-check-label" htmlFor="price">Precio</label>         
          <input
            className="form-control mb-2"
            id="price"
            name="price"
            type="number"
            placeholder="Precio"
            value={form.price}
            onChange={handleChange}
          />
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-4">
          <label className="form-check-label" htmlFor="stock">Cantidad</label>
          <input
            className="form-control mb-2"
            id="stock"
            name="stock"
            type="number"
            placeholder="Cantidad en Stock"
            value={form.stock}
            onChange={handleChange}
          />
          </div>
          <div className="col-md-4">
          <label className="form-check-label" htmlFor="stockmin">Stock Mínimo</label>
          <input
            className="form-control mb-2"
            id="stockmin"
            name="stockmin"
            type="number"
            placeholder="Stock Mínimo"
            value={form.stockmin}
            onChange={handleChange}
          />
          </div>
          <div className="col-md-4">
          <label className="form-check-label" htmlFor="stockmax">Stock Máximo</label>
          <input
            className="form-control mb-2"
            id="stockmax"
            name="stockmax"
            type="number"
            placeholder="Stock Máximo"
            value={form.stockmax}
            onChange={handleChange}
          />
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-4">
          <label className="form-check-label" htmlFor="categoryId">Categoría</label>         
          <input
            className="form-control mb-2"
            id="categoryId"
            name="categoryId"
            type="number"
            placeholder="ID Categoría"
            value={form.categoryId}
            onChange={handleChange}
          />
          </div>
          <div className="col-md-4">
          <label className="form-check-label" htmlFor="mesuarementId">Unidad de Medida</label>         
          <input
            className="form-control mb-2"
            id="mesuarementId"
            name="mesuarementId"
            type="number"
            placeholder="ID Unidad Medida"
            value={form.mesuarementId}
            onChange={handleChange}
          />
          </div>     
          <div className="form-check col-md-2">
            <br />
            <input
              className="form-check-input"
              id="stateCheckbox"      
              name="state"
              type="checkbox"
              checked={form.state}
              onChange={handleChangeState}
            />
            <label className="form-check-label" htmlFor="stateCheckbox">
              {form.state ? "Activo" : "Inactivo"}
            </label>
          </div>
          <div className="col-md-2">
            <br />
            <button className="btn btn-success" type="submit">
              {initialData ? 'Actualizar' : 'Agregar'}
            </button>             
          </div>
        </div>
      </div>
     
    </form>
  );
};

export default ProductForm;
