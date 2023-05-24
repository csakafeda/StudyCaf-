import React from 'react';
import { StudyGroups } from './StudyGroups';

const Groups: React.FC = () => {
    const randomNumber = () => {
        return Math.floor(Math.random() * 10);
    };

    return (
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-center text-2xl font-bold mb-4">Study Groups</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {StudyGroups.map((group) => (
                    <div key={group.id} className="bg-white border rounded-md p-4">
                        <h3 className="text-lg font-semibold mb-2">{group.name}</h3>
                        <p className="text-gray-600 mb-2">{group.description}</p>
                        <p className="text-gray-500 mb-2">Members: {group.members}</p>
                        {randomNumber() === 0 ? (
                            <p className="text-red-500">No seats left</p>
                        ) : (
                            <div className="flex justify-between items-center">
                                <p>{randomNumber()} seats left</p>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Join us
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Groups;
