import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaShoppingCart,
  FaMoneyBillWave,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState("weekly");

  // Example data (In a real app, you would fetch this from your backend)
  const [statsData, setStatsData] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    totalUsers: 0,
    salesGrowth: 0,
  });

  const [salesData, setSalesData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [topProductsData, setTopProductsData] = useState([]);

  useEffect(() => {
    // Simulate data loading
    setLoading(true);

    // Mock API call - replace with actual API calls
    setTimeout(() => {
      setStatsData({
        totalRevenue: 124650,
        totalOrders: 1453,
        totalUsers: 2845,
        salesGrowth: 12.3,
      });

      // Generate data based on selected period
      const newSalesData = generateSalesData(period);
      setSalesData(newSalesData);

      setCategoryData([
        { name: "Electronics", value: 35 },
        { name: "Clothing", value: 25 },
        { name: "Home & Kitchen", value: 20 },
        { name: "Books", value: 10 },
        { name: "Others", value: 10 },
      ]);

      setTopProductsData([
        { name: "Wireless Earbuds", sales: 452, revenue: 24850 },
        { name: "Smart Watch", sales: 378, revenue: 22680 },
        { name: "Laptop Bag", sales: 325, revenue: 16250 },
        { name: "Bluetooth Speaker", sales: 289, revenue: 14450 },
        { name: "Phone Case", sales: 267, revenue: 5340 },
      ]);

      setLoading(false);
    }, 1000);
  }, [period]);

  // Helper function to generate sales data
  const generateSalesData = (periodType) => {
    let data = [];

    if (periodType === "weekly") {
      data = [
        { name: "Mon", sales: 4000, orders: 240 },
        { name: "Tue", sales: 3000, orders: 198 },
        { name: "Wed", sales: 5000, orders: 306 },
        { name: "Thu", sales: 2780, orders: 189 },
        { name: "Fri", sales: 1890, orders: 148 },
        { name: "Sat", sales: 2390, orders: 178 },
        { name: "Sun", sales: 3490, orders: 221 },
      ];
    } else if (periodType === "monthly") {
      data = [
        { name: "Jan", sales: 12400, orders: 745 },
        { name: "Feb", sales: 10398, orders: 623 },
        { name: "Mar", sales: 19000, orders: 982 },
        { name: "Apr", sales: 8780, orders: 543 },
        { name: "May", sales: 9890, orders: 602 },
        { name: "Jun", sales: 11390, orders: 689 },
        { name: "Jul", sales: 14490, orders: 821 },
        { name: "Aug", sales: 10990, orders: 642 },
        { name: "Sep", sales: 9490, orders: 574 },
        { name: "Oct", sales: 15490, orders: 901 },
        { name: "Nov", sales: 17500, orders: 987 },
        { name: "Dec", sales: 21500, orders: 1123 },
      ];
    } else {
      // yearly
      data = [
        { name: "2020", sales: 125000, orders: 7845 },
        { name: "2021", sales: 168000, orders: 9254 },
        { name: "2022", sales: 194000, orders: 10876 },
        { name: "2023", sales: 235000, orders: 12453 },
        { name: "2024", sales: 267000, orders: 14328 },
      ];
    }

    return data;
  };

  // Colors for pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  // StatCard component for consistent stat display
  const StatCard = ({ title, value, icon, change }) => (
    <div className=" bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h4 className="text-2xl font-bold mt-1">{value}</h4>
          {change && (
            <div
              className={`flex items-center text-sm mt-2 ${
                change >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {change >= 0 ? (
                <FaArrowUp className="mr-1" />
              ) : (
                <FaArrowDown className="mr-1" />
              )}
              <span>{Math.abs(change)}% from last period</span>
            </div>
          )}
        </div>
        <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
          {icon}
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-10 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Analytics Dashboard
        </h1>
        <div className="flex space-x-2">
          <select
            className="bg-white border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Revenue"
          value={`$${statsData.totalRevenue.toLocaleString()}`}
          icon={<FaMoneyBillWave size={24} />}
          change={statsData.salesGrowth}
        />
        <StatCard
          title="Total Orders"
          value={statsData.totalOrders.toLocaleString()}
          icon={<FaShoppingCart size={24} />}
          change={8.4}
        />
        <StatCard
          title="Total Users"
          value={statsData.totalUsers.toLocaleString()}
          icon={<FaUsers size={24} />}
          change={5.7}
        />
        <StatCard
          title="Avg. Order Value"
          value={`$${Math.round(
            statsData.totalRevenue / statsData.totalOrders
          ).toLocaleString()}`}
          icon={<FaShoppingCart size={24} />}
          change={2.1}
        />
      </div>

      {/* Sales Chart */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Sales Overview
        </h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={salesData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#4f46e5"
                activeDot={{ r: 8 }}
                name="Sales ($)"
              />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="#10b981"
                name="Orders"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Category Distribution & Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Distribution */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Category Distribution
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Top Products
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={topProductsData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#4f46e5" name="Units Sold" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Products Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <h2 className="text-xl font-semibold p-4 border-b text-gray-800">
          Top Selling Products
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Units Sold
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topProductsData.map((product, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.sales}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${product.revenue.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
