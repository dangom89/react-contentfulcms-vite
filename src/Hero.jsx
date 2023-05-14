import heroImg from './assets/hero.svg'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A modi corporis, doloribus dolorum necessitatibus repudiandae repellat facere quaerat et voluptatibus nam iure amet accusamus voluptatum fugiat explicabo dolores laboriosam facilis!
                    </p>
                </div>
                <div className="img-container">
                    <img src={heroImg} alt="woman and the browser" className='img' />
                </div>
            </div>
        </section>
    )
}
export default Hero