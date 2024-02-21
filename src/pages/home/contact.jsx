import React from "react";
import "./home.css";
import product9 from "../../assets/products/images.png";
import product5 from "../../assets/products/5.png";
import product6 from "../../assets/products/6.jpeg";
import product8 from "../../assets/products/9.png";
import product1 from "../../assets/products/pic1.jpeg";
import product2 from "../../assets/products/pic2.jpeg";
import product3 from "../../assets/products/pic3.jpeg";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
  <div>
    <div className="main-body">
      
      <div className="main-text">
        <h3 className="title">Discover Jaipur</h3>
        <p className="desc">Unveiling the Heritage and Splendor of India's Pink City</p>
        <Link to="/">
        <button className="Bttn">EXPLORE NOW</button>
        </Link>
      </div>
      

      <div className="main-photos">
        <img className="main-image" src={product9} />
      </div>
    </div>
      <div className="info">
        <p  className="text">
            Experience the vibrant city of Jaipur, where rich history blends seamlessly with colorful traditions, offering a kaleidoscope of majestic forts, bustling bazaars, and captivating cultural heritage. Explore the architectural marvels and immerse yourself in the royal charm of this enchanting Pink City.
        </p>
      </div>

    
      <div className="main">
        <div className="main-text2">
          <p className="title2"> Accomodations </p>
          <p className="desc2">Crafted with Passion, Worn with Style  Explore the Artistry of Crochet Fashion!</p>
          <a ><Link to="/"><button class="Bttn-2">EXPLORE NOW</button></Link></a>
        </div>
        <div className="main-photos2">
          <img className="main-image2" src={product6}/>
        </div>
      </div>


<div className="main-attrac-body">
        <div className="attrac-img">
            <img className="main-attrac-image" src={product5}/>
        </div>
        <div className="attrac-text">
          <p className="title2"> Attractions </p>
          <p className="attrac-desc">
            Explore the resplendent Amber Fort, an architectural masterpiece adorned with intricate carvings and breathtaking views, and wander through the bustling lanes of the UNESCO-listed Jantar Mantar, an ancient astronomical observatory, in Jaipur's captivating tapestry of heritage.</p>
            <a ><button class="Bttn-3">VISIT NOW</button></a>
        </div>
</div>


    <div className="about-us">
      <header class="header">
        <p className="subt1">FAMOUS LOCATIONS</p>
        <p className="subt2"> 
In Jaipur's decadence, palatial grandeur meets vibrant bazaars,
Where history whispers tales amidst colors and flavors, setting hearts ablaze !</p>
        </header>

      <section class="content">
        <div className="c1">
          <img className="sub-image" src={product1} />
          <p className="sub-title">Whimsical Weave Elegance</p>
        </div>
        <div className="c2">
          <img className="sub-image" src={product2} />
          <p className="sub-title">Enchanted Garden Gown</p>
        </div>
        <div className="c3">
          <img className="sub-image" src={product3} />
          <p className="sub-title">Sunset Serenade Dress</p>
        </div>
      </section>
      <footer className="foot1">
      <div className="wrapper">
      <Link to="/">
        <button className="see-more-button">SEE MORE &rarr; </button>
      </Link>
      </div>
      </footer>
      
    </div>
    <div className="feedback">
      <header class="header">
          <p className="subt1">FEEDBACK CORNER</p>
          <p className="subt2"> Your Thoughts, Our Inspiration Welcome to the Feedback Corner, Where Your Voice Shapes Our Crochet Creations</p>
      </header>
      <section class="content">
        <div className="r1">
            <p className="cust">" Sarah D</p>
            <p className="feed">"The crochet tops are not only stylish but incredibly comfortable. I've recommended this website to all my friends!"</p>
        </div>
        <div className="r2">
        <p className="cust">" Emily R</p>
          <p className="feed">"The crochet dresses I purchased exceeded my expectations. I've received so many compliments, and I can't wait to shop here again."</p>
        </div>
        <div className="r3">
          <p className="cust">" Sophia G</p>
          <p className="feed">"We absolutely love your crochet clothing collection! The craftsmanship is impeccable, and the designs are so unique. The attention to detail is evident in every stitch. Keep up the fantastic work!"</p>
        </div>
      </section>
<footer class="footer-distributed">

			<div className="f footer-left" >


				<p class="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name">Chrochet Side © 2015</p>
			</div>

			<div class="footer-center">

				<div className="f">
					<i class="fa fa-map-marker"></i>
					<p><span>4 Cedros Ave</span> Sector 51, Delhi</p>
				</div>

				<div className="f">
					<i class="fa fa-phone"></i>
					<p>+91 1122334455667</p>
				</div>

				<div className="f">
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@chrochetside.com</a></p>
				</div>

			</div>

			<div class="f footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Empowering Women, Inspiring Fashion.
          Quality Yarn, Endless Style.
          Elevate Your Wardrobe with Us.
				</p>

				<div class="f footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
      
    </div>
  
  </div>
  
  );
};
