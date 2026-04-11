import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import './Gallery.css';

const images = [
  "/images/bedroom.webp",
  "/images/kitchen.webp",
  "/images/bathroom.webp",
  "/images/city_5.webp",
  "/images/balcony.webp",
  "/images/wine_bottle.webp",
  "/images/outside_building.webp",
  "/images/city.webp",
  "/images/bedroom_1.webp",
  "/images/bathroom_2.webp",
  "/images/detail.webp",
  "/images/city_2.webp",
  "/images/bedroom_2.webp",
  "/images/balcony_2.webp",
  "/images/city_3.webp",
  "/images/bedroom_3.webp",
  "/images/bathroom_3.webp",
  "/images/bathroom_detail.webp",
  "/images/city_4.webp",
  "/images/washing_machine.webp",
  "/images/bathroom_detail_2.webp",
  "/images/bedroom4.webp",
  "/images/city_6.webp"
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="gallery-page fade-in">
      <button 
        className="gallery-close-btn" 
        onClick={() => navigate('/')}
        aria-label="Close gallery"
      >
        <X size={28} />
      </button>
      <div className="gallery-viewer-container">
        
        <div className="gallery-main-view">
           <button className="gallery-nav-btn left" onClick={prevSlide}>
              <ChevronLeft size={36} />
           </button>
           
           <div className="gallery-image-wrapper">
              <img 
                 src={images[currentIndex]} 
                 alt={`Lazzaretto City Walk details ${currentIndex + 1}`} 
                 className="active-gallery-img"
              />
           </div>

           <button className="gallery-nav-btn right" onClick={nextSlide}>
              <ChevronRight size={36} />
           </button>
        </div>

        <div className="gallery-thumbnails">
          {images.map((img, index) => (
            <div 
               key={index} 
               className={`thumbnail-item ${index === currentIndex ? 'active' : ''}`}
               onClick={() => setCurrentIndex(index)}
            >
              <img src={img} alt={`Thumb ${index + 1}`} />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Gallery;

