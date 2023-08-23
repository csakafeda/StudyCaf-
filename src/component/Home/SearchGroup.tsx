import {Link} from "react-router-dom";
import React from "react";
import group from "../../pictures/groups.jpg";

const SearchGroup = () => {
    return (
        <div className="flex flex-wrap gap-3
        lg:flex-wrap lg:justify-center lg:mx-16
        xl:mx-32 ">
            <div className="max-w-3xl w-full lg:w-1/3">
                <p className="text-3xl font-semibold mb-10">Study groups</p>
                <p className="text-lg">
                    📚 Join our StudyGroups at StudyCafé and experience the perfect environment for collaborative
                    learning!

                    During our opening hours, you have the opportunity to join study groups and
                    connect with fellow students who are eager to support one another.
                    Whether you need help with your notes, want to discuss challenging topics,
                    or simply seek a space to immerse yourself in your studies, our StudyGroup is
                    here to assist you.
                    We can offer:
                    💺 Comfortable Seating, 🔌 Convenient Connectivity, 🪑 Bean Bags
                </p>
                <button
                    className="bg-transparent text-camel border-camel font-semibold py-2 px-4 border rounded mt-6
                     hover:border-transparent hover:bg-camel hover:text-white"
                >
                    <Link to={"/groups"} className="text-lg font-semibold">
                        Join a group now!
                    </Link>
                </button>
            </div>
            <div className="w-full lg:w-1/3 ">
                <div className="flex justify-center">
                    <img src={group} alt="Groups picture" className="rounded-lg shadow-lg object-contain "
                         style={{width: '100%', height: 'auto'}}/>
                </div>
            </div>
        </div>
    );
};

export default SearchGroup;