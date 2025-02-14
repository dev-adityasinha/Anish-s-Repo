
export const RestaurantPage = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/saveData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, phone, address, message })
        })
        const data = await response.json();
        console.log("Name", name)
        console.log("Address", message)
        console.log("Message", address)
        console.log("phone", phone)
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="p-6 max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-center">Welcome to Foodie's Delight</h1>
                <p className="text-center mb-6 text-gray-600">Enjoy the best cuisines and share your experience with us!</p>
                <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
                    <input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    <input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button type="submit" className="w-full">Submit</button>
                </form>
            </div>
        </form>
    );
}
