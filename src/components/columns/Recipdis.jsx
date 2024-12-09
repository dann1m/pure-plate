import './Recipdis.css'

const Recipdis = () => {
        return(
        <div className="dis">
            <div className="dis-content">
                <h1 className="dis-title">Delicious Recipes, Crafted for Every Diet</h1>
                <div className="dis-image">
                    <img className='dis-image' src='src/assets/healthy foods.jpg'></img>
                </div>
                <p className="dis-subtitle">Explore meals that cater to your needs without compromise.</p>
                <button className="dis-button">Find Yours</button>
            </div>
        </div>           
        )
}

export default Recipdis