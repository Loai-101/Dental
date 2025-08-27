import React, { useState, useEffect } from 'react';
import { 
  FaTooth, 
  FaBaby, 
  FaStar, 
  FaFlask, 
  FaMicroscope, 
  FaBolt, 
  FaUserMd,
  FaStethoscope,
  FaCog
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    // Set visible immediately when component mounts
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const openServicePopup = (service) => {
    setSelectedService(service);
  };

  const closeServicePopup = () => {
    setSelectedService(null);
  };

  const services = [
    {
      id: 1,
      name: "Advanced Check Up Technology",
      description: "Digital X-Rays - 3D Scanning - Bite Scanning & Adjustment",
      doctors: [
        {
          name: "Dr. Roger El Bassit",
          specialty: "Advanced Technology Specialist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756215713/898905_gdo9db.avif"
        }
      ],
      icon: <FaCog />,
      features: ["Digital X-Rays", "3D Scanning", "Bite Scanning", "Adjustment"]
    },
    {
      id: 2,
      name: "Children Speciality Dental Care",
      description: "Gentle approach - Child Friendly Environment - From Infantry Through The Teen Years",
      doctors: [
        {
          name: "Dr. Carla Moukarzel",
          specialty: "Pediatric Dentist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216187/Signs-Good-Dentist_zmorau.jpg"
        },
        {
          name: "Dr. Marlene Khoury",
          specialty: "Pediatric Dentist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216190/vsm_1277540215_k6i0jh.jpg"
        }
      ],
      icon: <FaBaby />,
      features: ["Gentle Approach", "Child Friendly Environment", "Infant Care", "Teen Care"]
    },
    {
      id: 3,
      name: "Cosmetic Dentistry",
      description: "Bleaching - Composite or Ceramic Veneers - Crowns - Smile Design",
      doctors: [
        {
          name: "Dr. Majd Mouawad",
          specialty: "Cosmetic Dentist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756215713/898905_gdo9db.avif"
        }
      ],
      icon: <FaStar />,
      features: ["Bleaching", "Composite Veneers", "Ceramic Veneers", "Crowns", "Smile Design"]
    },
    {
      id: 4,
      name: "Dental Hygiene",
      description: "Professional dental hygiene and preventive care services",
      doctors: [
        {
          name: "DH. Fatima Alaraibi",
          specialty: "Dental Hygienist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216190/vsm_1277540215_k6i0jh.jpg"
        },
        {
          name: "DH. Ghadeer Omran",
          specialty: "Dental Hygienist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216183/dental-associate-job-1170x780_ipoxli.jpg"
        }
      ],
      icon: <FaTooth />,
      features: ["Professional Cleaning", "Preventive Care", "Oral Health Education", "Maintenance"]
    },
    {
      id: 5,
      name: "Dental Lab",
      description: "State-of-the-Art - 3D Digital Technology",
      doctors: [
        {
          name: "Lab Technicians",
          specialty: "Dental Laboratory",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216183/dental-associate-job-1170x780_ipoxli.jpg"
        }
      ],
      icon: <FaFlask />,
      features: ["State-of-the-Art Equipment", "3D Digital Technology", "Custom Prosthetics", "Precision Work"]
    },
    {
      id: 6,
      name: "Endodontics",
      description: "Microscopic Root Canal Treatment",
      doctors: [
        {
          name: "Dr. Mario Fares",
          specialty: "Endodontist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756215714/Alex_in_the_surgery_at_Munro_Dental_eawjzy.webp"
        },
        {
          name: "Dr. Sami El Bassit",
          specialty: "Endodontist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756215713/898905_gdo9db.avif"
        }
      ],
      icon: <FaMicroscope />,
      features: ["Microscopic Root Canal", "Advanced Endodontics", "Pain Management", "Precision Treatment"]
    },
    {
      id: 7,
      name: "General Dentistry",
      description: "Fillings - Crown - Bridge - Veneers - Denture - Deep Cleaning - Whitening",
      doctors: [
        {
          name: "Dr. Elias El-Achkar",
          specialty: "General Dentist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216185/d206ac53273ccf64b50c776db6d333692fe4a0e0-1920x1280_lqh5zq.avif"
        },
        {
          name: "Dr. Donna Hassoun",
          specialty: "General Dentist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216190/vsm_1277540215_k6i0jh.jpg"
        },
        {
          name: "Dr. Marc El Bassit",
          specialty: "General Dentist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756215714/Alex_in_the_surgery_at_Munro_Dental_eawjzy.webp"
        },
        {
          name: "Dr. Azza Fityani",
          specialty: "General Dentist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216187/Signs-Good-Dentist_zmorau.jpg"
        }
      ],
      icon: <FaUserMd />,
      features: ["Fillings", "Crowns", "Bridges", "Veneers", "Dentures", "Deep Cleaning", "Whitening"]
    },
    {
      id: 8,
      name: "Laser Dentistry",
      description: "Advanced laser technology for precise and comfortable dental procedures",
      doctors: [
        {
          name: "Dr. Roger El Bassit",
          specialty: "Laser Specialist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756215713/898905_gdo9db.avif"
        }
      ],
      icon: <FaBolt />,
      features: ["Laser Treatment", "Precision Procedures", "Minimal Discomfort", "Advanced Technology"]
    },
    {
      id: 9,
      name: "Oral And Maxillo-Facial Surgery",
      description: "Wisdom Teeth - Implant - Benign Tumor - Gum & Bone Surgery",
      doctors: [
        {
          name: "Dr. Roger El Bassit",
          specialty: "Oral Surgeon",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756215713/898905_gdo9db.avif"
        },
        {
          name: "Dr. Sami El Bassit",
          specialty: "Oral Surgeon",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756215714/Alex_in_the_surgery_at_Munro_Dental_eawjzy.webp"
        },
        {
          name: "Dr. Carlos Khoury",
          specialty: "Oral Surgeon",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216191/How-Often-Should-I-See-the-Dentist-scaled_etmpkb.jpg"
        }
      ],
      icon: <FaStethoscope />,
      features: ["Wisdom Teeth Extraction", "Dental Implants", "Benign Tumor Removal", "Gum Surgery", "Bone Surgery"]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section - Outside container for full width */}
      <div className="services-hero">
        {/* Video Background */}
        <div className="services-hero-video-background">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="services-hero-video"
          >
            <source 
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/v1756286797/WhatsApp_Video_2025-08-27_at_12.26.16_caa7317c_yposoq.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          <div className="services-hero-video-overlay"></div>
        </div>
        
        <div className="services-hero-container">
          <div className="services-hero-content">
            <h1 className="services-hero-title">
              Our Services
            </h1>
            <p className="services-hero-description">
              Comprehensive dental care provided by our expert team of specialists
            </p>
            <div className="services-hero-buttons">
              <a href="/contact" className="services-hero-button contact-button">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Moving Services Bar */}
      <div className="moving-services-bar">
        <div className="moving-services-content">
          <span>Advanced Check Up Technology</span>
          <span>•</span>
          <span>Children Speciality Dental Care</span>
          <span>•</span>
          <span>Cosmetic Dentistry</span>
          <span>•</span>
          <span>Dental Hygiene</span>
          <span>•</span>
          <span>Dental Lab</span>
          <span>•</span>
          <span>Endodontics</span>
          <span>•</span>
          <span>General Dentistry</span>
          <span>•</span>
          <span>Laser Dentistry</span>
          <span>•</span>
          <span>Oral And Maxillo-Facial Surgery</span>
          <span>•</span>
          <span>Advanced Check Up Technology</span>
          <span>•</span>
          <span>Children Speciality Dental Care</span>
          <span>•</span>
          <span>Cosmetic Dentistry</span>
          <span>•</span>
          <span>Dental Hygiene</span>
          <span>•</span>
          <span>Dental Lab</span>
          <span>•</span>
          <span>Endodontics</span>
          <span>•</span>
          <span>General Dentistry</span>
          <span>•</span>
          <span>Laser Dentistry</span>
          <span>•</span>
          <span>Oral And Maxillo-Facial Surgery</span>
          <span>•</span>
          <span>Advanced Check Up Technology</span>
          <span>•</span>
          <span>Children Speciality Dental Care</span>
          <span>•</span>
          <span>Cosmetic Dentistry</span>
          <span>•</span>
          <span>Dental Hygiene</span>
          <span>•</span>
          <span>Dental Lab</span>
          <span>•</span>
          <span>Endodontics</span>
          <span>•</span>
          <span>General Dentistry</span>
          <span>•</span>
          <span>Laser Dentistry</span>
          <span>•</span>
          <span>Oral And Maxillo-Facial Surgery</span>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className={`services ${isVisible ? 'services-visible' : ''}`}>
        <div className="services-container">
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="service-card"
                onClick={() => openServicePopup(service)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">
                  {service.iconImage ? (
                    <img 
                      src={service.iconImage} 
                      alt={service.name}
                      className="service-icon-image"
                    />
                  ) : (
                    <span className="service-icon-text">{service.icon}</span>
                  )}
                </div>
                
                <div className="service-content">
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-description">{service.description}</p>
                  

                  
                  <div className="service-features">
                    <h4 className="features-title">Services Include:</h4>
                    <ul className="features-list">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="feature-item">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="service-button">
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Doctors Popup */}
      {selectedService && (
        <div className="service-popup-overlay" onClick={closeServicePopup}>
          <div className="service-popup" onClick={(e) => e.stopPropagation()}>
            <button className="service-popup-close-btn" onClick={closeServicePopup}>×</button>
            
            <div className="service-popup-content">
              <div className="service-popup-header">
                <div className="service-popup-icon">
                  {selectedService.iconImage ? (
                    <img 
                      src={selectedService.iconImage} 
                      alt={selectedService.name}
                      className="service-popup-icon-image"
                    />
                  ) : (
                    <span className="service-popup-icon-text">{selectedService.icon}</span>
                  )}
                </div>
                <h3 className="service-popup-name">{selectedService.name}</h3>
                <p className="service-popup-description">{selectedService.description}</p>
              </div>
              
              <div className="service-popup-doctors">
                <h4 className="doctors-title">Doctors who perform this service:</h4>
                <div className="doctors-list">
                  {selectedService.doctors.map((doctor, index) => (
                    <div key={index} className="doctor-item">
                      <div className="doctor-image">
                        <img 
                          src={doctor.image} 
                          alt={doctor.name}
                          className="doctor-avatar"
                        />
                      </div>
                      <div className="doctor-info">
                        <span className="doctor-name">{doctor.name}</span>
                        <span className="doctor-specialty">{doctor.specialty}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="service-popup-features">
                <h4 className="features-title">Services Include:</h4>
                <ul className="features-list">
                  {selectedService.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
