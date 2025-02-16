
// import { RestaurantPage } from "./ui"
// import './index.css'

import { useState } from "react";

export const Restaurant = () => {
    // setting state variables
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");
    const [item, setItem] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        // sending credentials to the backend server
        const response = await fetch("http://localhost:5000/saveData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, phone, address, message, item })
        })
        // const data = await response.json();
        alert("Order placed successfully")
        setAddress("")
        setMessage("")
        setPhone("")
        setName("")
        setItem("")
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container container">
                    <input type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#food">CATEGORY</a></li>
                        <li><a href="#food-menu">MENU</a></li>
                        <li><a href="#testimonials">TESTIMONIAL</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                    <h1 className="logo">WT</h1>
                </div>
            </nav>
            <section className="showcase-area" id="showcase">
                <div className="showcase-container">
                    <h1 className="main-title" id="home">FRESH NETFOODS</h1>
                    <p>EAT HEALTHY - IT IS GOOF FOR OUR HEALTH.</p>
                    <a href="#food-menu" className="btn btn-primary">Menu</a>
                </div>
            </section>

            <section id="about">
                <div className="about-wrapper container">
                    <div className="about-text">
                        <p className="small">ABOUT US</p>
                        <h2>We've beem making healthy food last for 10 years</h2>
                        <p align="left">
                            Experience the healthy flavors at our restro, Where we serve up delicious and healthiest dishes in a warm and inviting atmosphere.We're passionate about food,family and community .
                            Our Restaurant is dedicated to providing exceptional dining experiences that bring people together. Whether you're celebrating a special occasion .We're here to make it unforgettable.
                        </p>
                    </div>
                    <div className="about-img">
                        <img src="https://i.postimg.cc/mgpwzmx9/about-photo.jpg" alt="food" loading="lazy" />
                    </div>
                </div>
            </section>
            <section id="food">
                <h2>Types of food</h2>
                <div className="food-container container">
                    <div className="food-type fruite">
                        <div className="img-container">
                            <img src="https://i.postimg.cc/yxThVPXk/food1.jpg" alt="error" loading="lazy" />
                            <div className="img-content">
                                <h3>FRUITS</h3>
                                <a href="https://en.wikipedia.org/wiki/Fruit" className="btn btn-primary" target="blank">learn
                                    more</a>
                            </div>
                        </div>
                    </div>
                    <div className="food-type vegetable">
                        <div className="img-container">
                            <img src="https://i.postimg.cc/Nffm6Rkk/food2.jpg" alt="error" loading="lazy" />
                            <div className="img-content">
                                <h3>VEGETABLE</h3>
                                <a href="https://en.wikipedia.org/wiki/Vegetable" className="btn btn-primary" target="blank">learn
                                    more</a>
                            </div>
                        </div>
                    </div>
                    <div className="food-type grin">
                        <div className="img-container">
                            <img src="https://i.postimg.cc/76ZwsPsd/food3.jpg" alt="error" loading="lazy" />
                            <div className="img-content">
                                <h3>GRAIN</h3>
                                <a href="https://en.wikipedia.org/wiki/Grain" className="btn btn-primary" target="blank">learn
                                    more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="food-menu">
                <h2 className="food-menu-heading">FOOD MENU</h2>
                <div className="food-menu-container container">
                    <div className="food-menu-item">
                        <div className="food-img">
                            <img src="https://i.postimg.cc/wTLMsvSQ/food-menu1.jpg" alt="food-img" loading="lazy" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">GRILLED VEG SKEWERS</h2>
                            <p>
                                Colorful skewers of marinated vegetables such as bell peppers,Zucchini,cherry tomatoes and onions,grilled to perfection.
                            </p>
                            <p className="food-price">Price: &#8377; 250</p>
                        </div>
                    </div>

                    <div className="food-menu-item">
                        <div className="food-img">
                            <img src="https://i.postimg.cc/sgzXPzzd/food-menu2.jpg" alt="error" loading="lazy" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">FRESH FRUIT SALAD</h2>
                            <p>
                                A refreshing mix of seasonal fruits such as strawberries, blueberries, grapes and pineapple, served chilled.
                            </p>
                            <p className="food-price">Price: &#8377; 250</p>
                        </div>
                    </div>
                    <div className="food-menu-item">
                        <div className="food-img">
                            <img src="https://i.postimg.cc/8zbCtYkF/food-menu3.jpg" alt="food-img" loading="lazy" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">LENTIL VEG CURRY</h2>
                            <p>
                                A Flavorful and nutritious curry made with red lentils, variety of vegtables and species.
                                Served with a side of brown rice or grain naan.
                            </p>
                            <p className="food-price">Price: &#8377; 250</p>
                        </div>
                    </div>
                    <div className="food-menu-item">
                        <div className="food-img">
                            <img src="https://i.postimg.cc/Yq98p5Z7/food-menu4.jpg" alt="food-img" loading="lazy" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">GRILLED AVOCADO SALAD</h2>
                            <p>
                                A Fresh and flavorful salad with grilled chicken,diced avocado,mixed greens and a citrus vinaigrette.
                            </p>
                            <p className="food-price">Price: &#8377; 250</p>
                        </div>
                    </div>
                    <div className="food-menu-item">
                        <div className="food-img">
                            <img src="https://i.postimg.cc/KYnDqxkP/food-menu5.jpg" alt="food-img" loading="lazy" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">GRILLED CHICKEN BREAST</h2>
                            <p>
                                A Lean and flavorful chicken breast, grilled to perfection and served with a side of roasted vegetables.
                            </p>
                            <p className="food-price">Price: &#8377; 250</p>
                        </div>
                    </div>
                    <div className="food-menu-item">
                        <div className="food-img">
                            <img src="https://i.postimg.cc/Jnxc8xQt/food-menu6.jpg" alt="food-img" loading="lazy" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">VEGETABLE STIR-FRY</h2>
                            <p>
                                A Quick and easy stir-fry made with cooked brown rice, a variety of colorful vegtables, and a blend of savory spices.
                            </p>
                            <p className="food-price">Price: &#8377; 250</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonials">
                <h2 className="testimonial-title">WHAT OUR CUSTOMER SAYS</h2>
                <div className="testimonial-container container">
                    <div className="testimonial-box">
                        <div className="customer-detail">
                            <div className="customer-photo">
                                <img src="https://i.postimg.cc/5Nrw360Y/male-photo1.jpg" alt="user-photo" loading="lazy" />
                                <p className="customer-name">ROSS LEE</p>
                            </div>
                        </div>
                        <div className="star-rating">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </div>
                        <p className="testimonial-text">
                            I had the best dining experience at this healthy restaurant!
                            The food was not only delicious but also nutritious.
                            The presentation was amazing.
                        </p>

                    </div>
                    <div className="testimonial-box">
                        <div className="customer-detail">
                            <div className="customer-photo">
                                <img src="https://i.postimg.cc/sxd2xCD2/female-photo1.jpg" alt="user-image" loading="lazy" />
                                <p className="customer-name">AMELIA WATSON</p>
                            </div>
                        </div>
                        <div className="star-rating">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </div>
                        <p className="testimonial-text">
                            I Was impressed by the restaurant's commitment to using fresh and sustainable ingredients.
                            The food was flavorful and healthy.
                        </p>

                    </div>
                    <div className="testimonial-box">
                        <div className="customer-detail">
                            <div className="customer-photo">
                                <img src="https://i.postimg.cc/fy90qvkV/male-photo3.jpg" alt="user-image" loading="lazy" />
                                <p className="customer-name">BEN ROY</p>
                            </div>
                        </div>
                        <div className="star-rating">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </div>
                        <p className="testimonial-text">
                            The ambiance of this restaurant was modern and chic, with a cozy atmosphere that made us feel right at home.
                        </p>

                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="contact-container container">
                    <div className="contact-img">
                        <img src="https://i.postimg.cc/1XvYM67V/restraunt2.jpg" alt="restaurant-image" loading="lazy" />
                    </div>

                    <div className="form-container" >
                        <form onSubmit={handleSubmit}>
                            <h2>PLACE YOUR ORDER</h2>
                            <input type="text" placeholder="Your Name" name="your name" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} name="phone number" />
                            <input type="text" placeholder="Address details" value={address} onChange={(e) => setAddress(e.target.value)} name="address details" />
                            <input type="text" placeholder="Place your order item" value={item} onChange={(e) => setItem(e.target.value)} name="add your item" />
                            <input type="text" placeholder="Add your message" value={message} onChange={(e) => setMessage(e.target.value)} name="add your message" />
                            <button type="submit" className="btn">Submit</button>
                        </form>
                    </div>
                </div>
            </section >
            <footer id="footer">
                <h2>Restaurant &copy; 2024 all rights reserved</h2>
            </footer>

        </>
    )
}