import {Link} from "react-router-dom";
import React from "react";

const AboutUs = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <p className="text-lg">
                    <span className="font-semibold text-xl">Study Cafe - Budapest </span>
                    | All-day coffee, desserts & brunch restaurant in the center of Budapest
                    offering specialty coffee, breakfast, and also vegan,
                    lactose- and gluten-free options.
                </p>
                <p className="text-lg mt-4">
                    If you are looking for the best all-day breakfast & brunch in Budapest,
                    look no further. We serve delicious food, fresh juices and smoothies, salads,
                    sandwiches of your choice and of course great specialty coffee drinks all day long.
                </p>
                <p className="text-lg mt-4">
                    Try our sumptuous egg dishes, avocado toast and homemade donuts.
                    All pastries and bread are baked fresh in our own bakery.
                    We squeeze fresh orange juice and prepare fresh smoothies every day in the morning.
                    You will also find gluten-free and lactose-free options as well as vegetarian and
                    vegan meals on our menu.
                </p>
                <p className="text-lg mt-4">
                    We serve breakfast and brunch all day, every day of the week from 8.00 a.m.
                </p>
                <button
                    className="bg-transparent text-camel border-camel font-semibold py-2 px-4 border rounded mt-6
                    hover:border-transparent hover:bg-camel hover:text-white
                    ">
                    <Link to={"/menu"} className="text-lg font-semibold ">
                        See our menu here
                    </Link>
                </button>
            </div>
        </>
    )
}

export default AboutUs;