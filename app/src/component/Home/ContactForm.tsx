import React, {useState} from "react";

interface ContactFormProps {
    onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({onClose}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", {name, email, message});
        onClose();
    };

    return (
        <div className="fixed bottom-4 right-4 bg-white p-4 shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block font-semibold mb-1">
                        Name
                    </label>
                    <input type="text"
                           id="name"
                           className="w-full border border-gray-300 rounded py-2 px-3"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block font-semibold mb-1">
                        Email
                    </label>
                    <input type="email"
                           id="email"
                           className="w-full border border-gray-300 rounded py-2 px-3"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block font-semibold mb-1">
                        Message
                    </label>
                    <textarea id="message"
                              className="w-full border border-gray-300 rounded py-2 px-3"
                              rows={4}
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              required>

                    </textarea>
                </div>

                <div className="flex justify-end">
                    <button type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
