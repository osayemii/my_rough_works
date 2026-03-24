# E-Commerce Dashboard

A comprehensive admin dashboard for managing e-commerce operations. Includes product management, order tracking, and analytics visualization.

## Features

- 📊 Dashboard with key metrics
- 📦 Product management (CRUD operations)
- 🛒 Order tracking and filtering
- 📈 Analytics charts (sales, revenue)
- 👥 Customer management
- 📱 Fully responsive design

## Tech Stack

- React 18.2.0
- JavaScript (ES6+)
- Recharts for data visualization
- Vite 5.0.8
- CSS3

## Setup Instructions

1. Navigate to the project directory:
```bash
cd projects/ecommerce-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Project Structure

```
ecommerce-dashboard/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── DashboardContent.jsx
│   │   ├── Dashboard.jsx
│   │   ├── ProductManagement.jsx
│   │   ├── OrderManagement.jsx
│   │   ├── CustomerList.jsx
│   │   └── Analytics.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── styles/
│   │   ├── index.css
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Features in Detail

### Dashboard
View key metrics including total sales, orders, products, and low stock alerts.

### Product Management
Manage products with CRUD operations, view stock levels, and track low stock items.

### Order Management
Track orders with status indicators (Pending, Completed, Shipped).

### Analytics
Visualize sales trends and revenue with interactive charts using Recharts.

### Responsive Design
The dashboard adapts to all screen sizes with a mobile-friendly sidebar navigation.



