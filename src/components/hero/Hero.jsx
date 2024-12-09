import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-content">
            <h1 className="hero-title">Wholesome Recipes, Adapted For Every Plate</h1>
            <p className="hero-subtitle">Discover tasty substitutes, flexible recipes, and everything you need to enjoy food your way</p>
            <div className="hero-search">
                <select className="hero-filter">
                    <option value="recipes">Recipes</option>
                    <option value="substitutes">Substitutes</option>
                </select>
                <input
                    type="text"
                    placeholder="Search here..."
                    className="hero-search-input"
                />
            </div>
            <button className="hero-button">Start Here</button>
        </div>
    </div>
  )
}

export default Hero;
