import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

interface ContactForm {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [contactForm, setContactForm] = useState<ContactForm>({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setContactForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)  => {
        e.preventDefault();
        try {
            if (!contactForm.name || !contactForm.email || !contactForm.message) {
                throw new Error('Please fill in all fields');
            }
            console.log(contactForm);
            setError('');
            navigate('/');
        } catch (e) {
            setError((e as Error).message);
        }
    };

    return (
        <div className="font-serif container mx-auto py-8">
            <div className="max-w-md mx-auto bg-nav-bar rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={contactForm.name}
                            onChange={handleInputChange}
                            className="w-full bg-sand border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={contactForm.email}
                            onChange={handleInputChange}
                            className="w-full bg-sand border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={contactForm.message}
                            onChange={handleInputChange}
                            className="w-full bg-sand border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={4}
                            required
                        ></textarea>
                    </div>
                    <button type="submit"
                            className="bg-sand text-white py-2 px-4 rounded-md hover:bg-camel transition-colors duration-300">Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
