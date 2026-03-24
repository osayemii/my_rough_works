import { mockProducts, mockOrders } from '../data/mockData'
import './Dashboard.css'

const Dashboard = () => {
  const totalSales = mockOrders.reduce((sum, order) => sum + order.total, 0)
  const totalOrders = mockOrders.length
  const lowStockProducts = mockProducts.filter((p) => p.stock < 20).length

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Sales</h3>
          <p className="stat-value">${totalSales.toFixed(2)}</p>
        </div>
        <div className="stat-card">
          <h3>Total Orders</h3>
          <p className="stat-value">{totalOrders}</p>
        </div>
        <div className="stat-card">
          <h3>Products</h3>
          <p className="stat-value">{mockProducts.length}</p>
        </div>
        <div className="stat-card">
          <h3>Low Stock</h3>
          <p className="stat-value warning">{lowStockProducts}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard



