// src/components/CategoryList.jsx
import React, { useEffect, useState } from 'react';
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../services/categoryService';
import CategoryForm from './CategoryForm';
import imgedit from '../assets/edit.png';
import imgdelete from '../assets/delete.png';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchCategories = async () => {
    const res = await getCategories();
    setCategories(res.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSave = async (category) => {
    if (editing) {
      await updateCategory(editing.idcategory, category);
      setEditing(null);
    } else {
      await createCategory(category);
    }
    fetchCategories();
  };

  const handleEdit = (category) => setEditing(category);

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
      <CategoryForm onSubmit={handleSave} initialData={editing} />
      <hr />
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
