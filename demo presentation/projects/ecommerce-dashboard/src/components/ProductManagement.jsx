import { useState } from 'react'
import { mockProducts } from '../data/mockData'
import './ProductManagement.css'

const ProductManagement = () => {
  const [products, setProducts] = useState(mockProducts)
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="product-management">
      <div className="page-header">
        <h1>Products</h1>
        <button className="add-btn" onClick={() => setShowForm(true)}>
          + Add Product
        </button>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td className={product.stock < 20 ? 'low-stock' : ''}>
                  {product.stock}
                </td>
                <td>{product.category}</td>
                <td>
                  <button className="action-btn">Edit</button>
                  <button className="action-btn delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductManagement



