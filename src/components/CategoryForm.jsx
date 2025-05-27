// src/components/CategoryForm.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { getCategoryById, createCategory, updateCategory } from "../services/categoryService"; // necesitas este método

const CategoryForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();  
  const [form, setForm] = useState({ name: '', state: false });

  useEffect(() => {
    if (id) {
      getCategoryById(id).then(res => setForm(res.data));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateCategory(id, form);
    } else {
      await createCategory(form);
    }
    navigate('/categories');
  };

  const handleCancel = () => navigate('/categories');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeState = (e) => {
    setForm({ ...form, state: e.target.checked });
  };

  return (
    <>
    <hr />
    <h2>{id ? "Editar Categoría" : "Nueva Categoría"}</h2>
    <hr />    
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <input
            className="form-control mb-2"
            name="name"
            placeholder="Nombre de la Categoría"
            value={form.name}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="row justify-content-center">
        <div className="mb-2 col-md-6">
          <input
            className="form-check-input"
            id="stateCheckbox"      
            name="state"
            type="checkbox"
            text="Estado"
            checked={form.state}
            onChange={handleChangeState}
          />
          <label className="form-check-label" htmlFor="stateCheckbox">
            {form.state ? " Activa" : " Inactiva"}
          </label>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-3 text-center">
          <button className="btn btn-success" type="submit">
            {id ? 'Actualizar' : 'Agregar'}
          </button>          
        </div>
        <div className="col-md-3 text-center">
          <button className="btn btn-secondary" type="button" onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </div>
      </div>
    </form>
    </>
  );
};

export default CategoryForm;
