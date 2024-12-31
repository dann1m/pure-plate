import './About.css'

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="header">About Us</h1>
        <p className="subtitle">Making dietary choices easy, delicious, and accessible.</p>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <p className="about-text">
          At Pure Plate, we’re dedicated to helping you explore recipes and substitutes tailored to your dietary needs. 
          Whether you are vegan, gluten-free, or looking for creative ways to cook, we’ve got you covered. Our mission 
          is to make eating enjoyable for everyone, regardless of restrictions.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <a href="/recipes" className="cta-button">Explore Recipes</a>
      </section>
    </div>
  )
}

export default About