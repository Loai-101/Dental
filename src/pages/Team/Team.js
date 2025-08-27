import React, { useState, useEffect } from 'react';
import './Team.css';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

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

    const element = document.getElementById('team');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "General Dentist",
      experience: "12 years",
      description: "Dr. Sarah specializes in comprehensive dental care and preventive treatments. She is known for her gentle approach and patient education.",
      skills: ["Dental Cleanings", "Cavity Fillings", "Root Canal Therapy", "Dental Exams", "Preventive Care", "Patient Education"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216185/d206ac53273ccf64b50c776db6d333692fe4a0e0-1920x1280_lqh5zq.avif"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Cosmetic Dentist",
      experience: "15 years",
      description: "Dr. Michael is a leading cosmetic dentist with expertise in smile makeovers and advanced aesthetic procedures.",
      skills: ["Teeth Whitening", "Porcelain Veneers", "Dental Bonding", "Smile Makeovers", "Cosmetic Contouring", "Gum Reshaping"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756215713/898905_gdo9db.avif"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Orthodontist",
      experience: "10 years",
      description: "Dr. Emily is passionate about creating beautiful smiles through modern orthodontic techniques and personalized treatment plans.",
      skills: ["Traditional Braces", "Invisalign", "Retainers", "Early Treatment", "Clear Aligners", "Orthodontic Surgery"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216190/vsm_1277540215_k6i0jh.jpg"
    },
    {
      id: 4,
      name: "Dr. David Thompson",
      specialty: "Oral Surgeon",
      experience: "18 years",
      description: "Dr. David is a highly skilled oral surgeon specializing in complex surgical procedures and emergency dental care.",
      skills: ["Wisdom Tooth Extraction", "Dental Implants", "Jaw Surgery", "Emergency Care", "Facial Trauma", "TMJ Treatment"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756215714/Alex_in_the_surgery_at_Munro_Dental_eawjzy.webp"
    },
    {
      id: 5,
      name: "Dr. Lisa Park",
      specialty: "Pediatric Dentist",
      experience: "8 years",
      description: "Dr. Lisa creates a fun and comfortable environment for children while providing excellent dental care and education.",
      skills: ["Child-Friendly Care", "Preventive Treatments", "Dental Education", "Growth Monitoring", "Behavior Management", "Sedation Dentistry"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216187/Signs-Good-Dentist_zmorau.jpg"
    },
    {
      id: 6,
      name: "Dr. Robert Wilson",
      specialty: "Periodontist",
      experience: "14 years",
      description: "Dr. Robert specializes in gum health and advanced periodontal treatments to maintain optimal oral health.",
      skills: ["Gum Disease Treatment", "Dental Implants", "Gum Grafting", "Maintenance Care", "Laser Therapy", "Bone Grafting"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216191/How-Often-Should-I-See-the-Dentist-scaled_etmpkb.jpg"
    },
    {
      id: 7,
      name: "Dr. Amanda Foster",
      specialty: "Endodontist",
      experience: "11 years",
      description: "Dr. Amanda is an expert in root canal therapy and endodontic procedures, ensuring patients maintain their natural teeth.",
      skills: ["Root Canal Therapy", "Endodontic Surgery", "Cracked Tooth Treatment", "Dental Trauma", "Retreatment", "Microscopic Endodontics"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216190/vsm_1277540215_k6i0jh.jpg"
    },
    {
      id: 8,
      name: "Dr. James Martinez",
      specialty: "Prosthodontist",
      experience: "16 years",
      description: "Dr. James specializes in dental prosthetics, implants, and complex restorative procedures to restore beautiful smiles.",
      skills: ["Dental Implants", "Crowns & Bridges", "Dentures", "Full Mouth Reconstruction", "Digital Smile Design", "Implant Restoration"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216183/dental-associate-job-1170x780_ipoxli.jpg"
    }
  ];

  const openPopup = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const closePopup = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="team-page">
      <section id="team" className={`team ${isVisible ? 'team-visible' : ''}`}>
        <div className="team-container">
          <div className="team-header">
            <h2 className="team-title">Meet Our Team</h2>
            <p className="team-subtitle">
              Experienced dental professionals dedicated to your oral health
            </p>
          </div>
          
          <div className="team-content">
            <div className="doctors-grid">
              {doctors.map((doctor, index) => (
                <div 
                  key={doctor.id}
                  className="doctor-card"
                  onClick={() => openPopup(doctor)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="doctor-image">
                    {doctor.image.startsWith('http') ? (
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className="doctor-avatar-image"
                      />
                    ) : (
                      <span className="doctor-avatar">{doctor.image}</span>
                    )}
                  </div>
                  
                  <div className="doctor-info">
                    <h3 className="doctor-name">{doctor.name}</h3>
                    <p className="doctor-specialty">{doctor.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Popup */}
      {selectedDoctor && (
        <div className="doctor-popup-overlay" onClick={closePopup}>
          <div className="doctor-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={closePopup}>×</button>
            
            <div className="popup-content">
                             <div className="popup-header">
                 {selectedDoctor.image.startsWith('http') ? (
                   <img 
                     src={selectedDoctor.image} 
                     alt={selectedDoctor.name}
                     className="popup-avatar-image"
                   />
                 ) : (
                   <span className="popup-avatar">{selectedDoctor.image}</span>
                 )}
                 <h3 className="popup-name">{selectedDoctor.name}</h3>
                 <p className="popup-specialty">{selectedDoctor.specialty}</p>
               </div>
              
              <div className="popup-details">
                <div className="popup-experience">
                  <h4>Experience</h4>
                  <p>{selectedDoctor.experience}</p>
                </div>
                
                <div className="popup-description">
                  <h4>About</h4>
                  <p>{selectedDoctor.description}</p>
                </div>
                
                <div className="popup-skills">
                  <h4>Specializations</h4>
                  <div className="skills-grid">
                    {selectedDoctor.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
