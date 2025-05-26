// src/services/productService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/products';

export const getProducts = () => axios.get(`${API_URL}`);
export const getProductById = (id) => axios.get(`${API_URL}/${id}`);
export const getProductByCode = (codeproduct) => axios.get(`${API_URL}/findByCodeLike/${codeproduct}`);
export const getProductByName = (nameproduct) => axios.get(`${API_URL}/findByNameLike/${nameproduct}`);
export const getProductsByIdCategory = (idcategory) => axios.get(`${API_URL}/findByCategoryId/${idcategory}`);
export const getProductsByNameCategory = (namecategory) => axios.get(`${API_URL}/findByCategoryName/${namecategory}`);

export const createProduct = (product) => axios.post(API_URL, product);

export const updateProduct = (id, product) => axios.put(`${API_URL}/${id}`, product);

export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);
