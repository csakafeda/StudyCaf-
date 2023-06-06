import React from 'react';
import {StudyGroups} from './StudyGroups';
import bgbooks from "../../pictures/books.jpg";

const Groups: React.FC = () => {
    const randomNumber = () => {
        return Math.floor(Math.random() * 10);
    };

    return (
        <div className=" font-serif bg-image-container bg-cover min-h-screen"
             style={{backgroundImage: `url(${bgbooks})`, backgroundRepeat: "repeat", height: "100%"}}>
            <div className="mr-72 ml-72">
                <h2 className="rounded-lg bg-sand text-center text-2xl font-bold mr-72 ml-72 p-5 bg-opacity-90 shadow-lg">
                    Study Groups
                </h2>
                <div className="p-8 flex justify-center items-center mb-4">
                    <div className="flex gap-1 flex-wrap justify-center items-stretch">
                        {StudyGroups.map((group) => (
                            <div key={group.id}
                                 className="w-80 rounded-lg overflow-hidden shadow-lg bg-opacity-90 bg-sand">
                                <h3 className="text-xl font-semibold py-4 px-6 bg-camel bg-opacity-60 ">
                                    {group.name}
                                </h3>
                                <p className="text-gray-600 mb-2 py-2 px-6">{group.description}</p>
                                <p className="text-gray-500 mb-2 px-6">Members: {group.members}</p>
                                {randomNumber() === 0 ? (
                                    <p className="text-red-500">No seats left</p>
                                ) : (
                                    <div className="flex justify-between items-center px-6">
                                        <p>{randomNumber()} seats left</p>
                                        <button
                                            className="bg-nav-bar hover:bg-camel text-white font-bold py-2 px-4 rounded">
                                            Join us
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Groups;
