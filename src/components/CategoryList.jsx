// src/components/CategoryList.jsx
import React, { useEffect, useState } from 'react';
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../services/categoryService';
import { useNavigate } from 'react-router-dom';
import CategoryForm from './CategoryForm';
import imgedit from '../assets/edit.png';
import imgdelete from '../assets/delete.png';

const CategoryList = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const res = await getCategories();
    setCategories(res.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAdd = () => {
    navigate(`/categories/new`);
  }

  const handleEdit = (category) => {
    navigate(`/categories/edit/${category.idcategory}`);
  } 

  const handleDelete = async (id) => {
    if (window.confirm('¿Seguro que deseas eliminarla?')) {
      await deleteCategory(id);
      fetchCategories();
    }
  };

  return (
    <>
      <hr />
      <h2>Parametrización de Categorías</h2>
      <hr />
      <button className="btn btn-primary mb-2" onClick={handleAdd}>Agregar Categoría</button>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th><th>Nombre</th><th>Estado</th><th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(c => (
            <tr key={c.idcategory}>
              <td>{c.idcategory}</td>
              <td>{c.name}</td>
              <td>{c.state ? 'Activa' : 'Inactiva'}</td>
              <td>
                <a onClick={() => handleEdit(c)}><img src={imgedit} title="Editar" alt="Editar" height="20"/></a>
                <a onClick={() => handleDelete(c.idcategory)}><img src={imgdelete} title="Eliminar" alt="Eliminar" height="20"/></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CategoryList;
