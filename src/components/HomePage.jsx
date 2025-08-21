import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function HomePage() {
  const carouselImages = [
    "https://skysafar.in/wp-content/uploads/2024/06/Mumbai.png",
    "https://mumbaitourism.co.in/wp-content/uploads/2024/03/Temple-Night-View-1024x819.webp",
    "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/02/23/Pictures/_acd6ab62-1871-11e8-80b7-5f600041ef82.jpg",
    "https://static.toiimg.com/thumb/msid-62479040,width-1070,height-580,imgsize-775130,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/10/Jehangir-Art-Gallery-cp-840x425.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === carouselImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const categories = [
    {
      title: "Religious Places",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh_jkUYRNKQZaf1efqXDNweDo_Eoag4Bhs-g&s",
      path: "/category/religious",
    },
    {
      title: "Cafés",
      image:
        "https://visittotnes.co.uk/wp-content/uploads/2016/09/cafe-mumbai-a.jpg",
      path: "/category/cafes",
    },
    {
      title: "Restaurants",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeEDhTeFgS8xOgfxEdjcAWGSh3lPN8GrP8Mg&s",
      path: "/category/restaurants",
    },
    {
      title: "Historic Places",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToawfo26I-IFEgzBflspKr3pAWoRj-eZvuXg&s",
      path: "/category/historic",
    },
  ];

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Mayanagri</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category/religious">Categories</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      {/* Carousel */}
      <div className="carousel">
        <button className="carousel-btn prev" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="carousel-track">
          <img
            src={carouselImages[currentIndex]}
            alt={`Slide ${currentIndex}`}
          />
        </div>
        <button className="carousel-btn next" onClick={nextSlide}>
          &#10095;
        </button>

        {/* Dots Indicators */}
        <div className="dots-container">
          {carouselImages.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Categories */}
      <h2 className="section-title">Explore Categories</h2>
      <div className="card-grid">
        {categories.map((cat, index) => (
          <Link to={cat.path} key={index} className="card">
            <img src={cat.image} alt={cat.title} />
            <div className="card-title">{cat.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
