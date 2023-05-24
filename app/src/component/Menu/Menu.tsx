import React from "react";
import {MenuItems} from "./menuItems";
import bg from "../../pictures/menu_bg.jpg"

const Menu: React.FC = () => {
    return (
        <div className="bg-image-container"
             style={{backgroundImage: `url(${bg})`, backgroundRepeat: "repeat", height: "100%",}}>
            <h2 className="text-center text-2xl font-bold mb-4"> Study Cafe - Menu</h2>
            <div className="p-8 flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {MenuItems.map((category, index) => (
                        <div key={index}
                             className="rounded-lg overflow-hidden shadow-lg bg-opacity-90 bg-orange-200 w-full sm:w-75">
                            <h2 className="text-2xl font-semibold py-4 px-6 bg-orange-900 bg-opacity-60">
                                {category.name}
                            </h2>
                            <ul className="p-6">
                                {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="mb-4">
                                        <h3 className="text-lg font-medium">{item.name}</h3>
                                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
