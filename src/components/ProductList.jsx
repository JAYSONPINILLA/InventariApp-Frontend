// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../services/productService';
import ProductForm from './ProductForm';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSave = async (product) => {
    if (editing) {
      await updateProduct(editing.id, product);
      setEditing(null);
    } else {
      await createProduct(product);
    }
    fetchProducts();
  };

  const handleEdit = (product) => setEditing(product);

  const handleDelete = async (id) => {
    if (window.confirm('¿Seguro que deseas eliminarlo?')) {
      await deleteProduct(id);
      fetchProducts();
    }
  };

  return (
    <div>
      <ProductForm onSubmit={handleSave} initialData={editing} />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th><th>Nombre</th><th>Precio</th><th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>${p.price}</td>
              <td>
                <button onClick={() => handleEdit(p)} className="btn btn-warning btn-sm me-2">Editar</button>
                <button onClick={() => handleDelete(p.id)} className="btn btn-danger btn-sm">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
