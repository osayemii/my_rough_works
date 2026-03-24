import Dashboard from './Dashboard'
import ProductManagement from './ProductManagement'
import OrderManagement from './OrderManagement'
import CustomerList from './CustomerList'
import Analytics from './Analytics'
import './DashboardContent.css'

const DashboardContent = ({ activeView }) => {
  return (
    <div className="main-content">
      {activeView === 'dashboard' && <Dashboard />}
      {activeView === 'products' && <ProductManagement />}
      {activeView === 'orders' && <OrderManagement />}
      {activeView === 'customers' && <CustomerList />}
      {activeView === 'analytics' && <Analytics />}
    </div>
  )
}

export default DashboardContent



