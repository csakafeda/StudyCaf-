import React from "react";
import menuItems from "./menuItems";

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100 flex flex-col h-screen justify-between">
      <header className="py-6 px-4 text-center">
        <h1 className="text-4xl font-bold">Welcome to StudyCafé</h1>
        <p className="mt-2">Serving the finest coffee since 2023</p>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Our Menu</h2>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left">Item</th>
              <th className="text-left">Description</th>
              <th className="text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item.title}>
                <td className="text-left">{item.title}</td>
                <td className="text-left">{item.description}</td>
                <td className="text-right">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <footer className="w-full text-center bg-gray-200 static bottom-0">
        <p>{new Date().getFullYear()} StudyCafé&copy;. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
