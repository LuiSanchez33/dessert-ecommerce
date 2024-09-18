import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Cake, ShoppingCart, TrendingUp } from 'lucide-react';

// Simulated data for the sentiment analysis chart
const sentimentData = [
  { name: 'Jan', Chocolate: 4000, Vanilla: 2400, Matcha: 2400 },
  { name: 'Feb', Chocolate: 3000, Vanilla: 1398, Matcha: 2210 },
  { name: 'Mar', Chocolate: 2000, Vanilla: 9800, Matcha: 2290 },
  { name: 'Apr', Chocolate: 2780, Vanilla: 3908, Matcha: 2000 },
  { name: 'May', Chocolate: 1890, Vanilla: 4800, Matcha: 2181 },
  { name: 'Jun', Chocolate: 2390, Vanilla: 3800, Matcha: 2500 },
  { name: 'Jul', Chocolate: 3490, Vanilla: 4300, Matcha: 2100 },
];

const DessertEcommerce = () => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Sweet Insights Bakery</h1>
        <div className="flex items-center">
          <ShoppingCart className="mr-2" />
          <span>{cartItems} items</span>
        </div>
      </header>

      <main>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Trending Flavors</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            <LineChart width={600} height={300} data={sentimentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Chocolate" stroke="#8b4513" />
              <Line type="monotone" dataKey="Vanilla" stroke="#f3e5ab" />
              <Line type="monotone" dataKey="Matcha" stroke="#90EE90" />
            </LineChart>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Matcha Dream Cake', 'Chocolate Delight', 'Vanilla Cloud Cupcakes'].map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <Cake className="mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">{product}</h3>
                <p className="mb-4">Delicious and freshly baked!</p>
                <button
                  onClick={addToCart}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">AI-Powered Insights</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <TrendingUp className="mr-2" />
              <span className="font-semibold">Latest Trend:</span>
            </div>
            <p>
              Our AI has detected a 200% increase in positive sentiment around matcha-flavored desserts. 
              Try our new Matcha Dream Cake today!
            </p>
          </div>
        </section>
      </main>

      <footer className="mt-12 text-center text-gray-600">
        <p>&copy; 2024 Sweet Insights Bakery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DessertEcommerce;