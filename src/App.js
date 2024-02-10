import React from 'react';
import { lcounter } from './like.js'; // Import lcounter function from like.js
import pro4 from './Assets/pro4.jpg';
import pro2 from './Assets/pro2.jpg';
import pro3 from './Assets/pro3.jpg';
import dp4  from './Assets/dp4.jpg';
import img1 from './Assets/img1.png';
import img2 from './Assets/img2.jpg';
import img3 from './Assets/img3.jpg';
// import thankyou from './Assets/img2.jp';
// import './like.js';

import './App.css';

function App() {
  return (
    <div>
      <nav className=" navbar fixed-top navbar-expand-md navbar-dark bg-dark  ashphotography">
         <a className="navbar-brand" href="home.html">ASH PHOTOGRAPHY📸</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto pr-5">
            <li className="nav-item">
              <a className="nav-link " href="#homeap">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutap">About</a>
            </li>
            <li className="nav-item "disabled>
              <a className="nav-link" href="#portfolioap">Portfolio Images</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#serviceap">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactap">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>

      <br/>
      <br/>
      <br/>

      <section id="homeap">
        <div className="container-fluid -container mr-auto ">
          <div className="alert alert-success mt-0" role="alert">
            Hurry Up Guyz! Book & Avail your <b>Valentine's Day Special💖</b> offer on COUPLE SHOOT!
            <span className="badge badge-pill badge-info">Info</span>
          </div>
        </div>

        

<div id="carouselExampleIndicators" className="carousel slide" >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="myslide">
            <img className="d-block w-100" src={pro4} alt="First slide" />
          </div>
          <div className="carousel-caption">
            <h2>Discover the beauty of photography</h2>
            <a href="https://www.instagram.com/_itz_ap_editography/" target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-danger active">INSTAGRAM</button>
            </a>
            <a href="#">
              <button type="button" className="btn btn-primary" disabled>PORTFOLIO</button>
            </a>
          </div>
        </div>

        <div className="carousel-item">
          <div className="myslide">
            <img className="d-block w-100" src={pro2} alt="Second slide" />
          </div>
          <div className="carousel-caption">
            <h2>Never sacrifice three things: family, love, and Photography</h2>
            <a href="https://www.instagram.com/_itz_ap_editography/" target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-danger active">INSTAGRAM</button>
            </a>
            <a href="#">
              <button type="button" className="btn btn-primary" disabled>PORTFOLIO</button>
            </a>
          </div>
        </div>

        <div className="carousel-item">
          <div className="myslide">
            <img className="d-block w-100" src={pro3} alt="Third slide" />
          </div>
          <div className="carousel-caption">
            <h2 className='text-dark'> Visual artists use DRONES to capture beautiful new images and camera angles.</h2>
            <a href="https://www.instagram.com/_itz_ap_editography/" target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-danger active">INSTAGRAM</button>
            </a>
            <a href="#">
              <button type="button" className="btn btn-primary" disabled>PORTFOLIO</button>
            </a>
          </div>
        </div>
      </div>

      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
      </section>

      <hr />
      <br />
      <br />

      <section id="aboutap">
        <div className="container my-4">
          <div className="row featurette">
            <div className="col-md-7 order-md-3">
              <a>
                <h1 className=" featurette-heading  ">A Little Bit about Me😎!</h1>
              </a>
              <h3 className="text-muted">I am Aniket Potbhare <br /> The Person behind the Page.</h3>

              <br />
              <h5 className="lead">
                <b>📸Creator |🚀 Aspiring Software Engineer | Frontend Enthusiast | Open to New Opportunities 🌐</b>
                <br />
                <br />
                As a recent IT graduate, I am highly motivated to start my career in the industry and contribute my skills
                to make a positive impact. My educational background has provided me with a solid foundation in programming
                languages such as C Programming ,Javascript as well as hands on skills in Front-end Development, Web Designing.
                <br /><br />

                <b>🎓 Curious Learner | Forever Student 📚</b> <br /> <br />
                Currently, I am focusing on expanding my knowledge in Java to enhance Full Stack Java development skills.
                In my pursuit of excellence, I strive to be a lifelong learner. I am dedicated to expanding my horizons by
                engaging in workshops, attending tech conferences, and staying updated on the latest advancements in the
                field.
                <br /><br />

                <b>🤝 Let's Connect! 📩</b>
                <br /><br />
                I am enthusiastic about networking with professionals who share my passion for software engineering and
                frontend development. Whether it's discussing exciting projects, exploring potential collaborations, or
                exchanging ideas, I'm always open to connecting and learning from diverse perspectives.
                <br /><br />
                If you have any exciting opportunities or ideas to discuss, feel free to reach out. Let's connect and make a
                positive impact through technology!
              </h5>
            </div>
            <div className="col-md-5 order-md-2">
              <img className="featurette-image img-fluid mx-auto" src={dp4} alt="BEHIND THE PAGE" />
            </div>
          </div>
          <hr className="featurette-divider" />
        </div>

        <div className="container mt-3 mb-4">
          <h4>WHAT WE OFFER</h4>
          <br />
          <h5>With the proper camera and vision, photography can make your life much better. It can help lift our
            spirits when we are down, help us look beyond the disappointments life can sometimes throw at us and
            spark our creativity and imagination. If you are interested in finding a new hobby, or just looking to
            take better pictures, Below are just a few of the many benefits of developing a love of photography.
            <br />
            Don’t believe it? Look at all the old photographs your mom or grandmother had around. I personally love
            looking at old pictures and imagining what life must have been like "back in the day". And anytime I get
            to missing family and friends who have passed on, a photo of them can bring back such beautiful and
            cherished memories.
            <br />
            Photography documents your journey through life
            From your childhood pictures to your child’s pictures to your grandchild’s pictures. From first smiles
            to first steps to first dates, life can be documented and preserved. Photography captures personal
            communication that would otherwise be lost forever.
            <br />
            Photography help you find beauty in the world.
            We can find beauty in our lives through photography. From the simpleness of everyday objects around us
            to the craziness of our children who bring us joy yet drive us crazy. Using a camera to find beauty in
            the things and people around us, helps us to see things in a different light. A wonderful therapeutic
            benefit of photography is that it can help us see the beauty surrounding us we just have to take a moment
            to stop and look!
            <br />
            Photography preserves new and old memories
            Think of the wife or husband who has lost a spouse. Or the child who lost a parent. With pictures not
            only can they have no fear of forgetting their loved one’s face, a photo can help them remember exactly
            what was going on when that picture was snapped, cementing the memory forever.
            <br />
            Photography is an act of creating
            The simple act of creation is important in helping us as humans feel fulfilled. When a child finishes a
            drawing that may not be the masterpiece he or she thinks it is, they beam with pride as praise is
            showered down upon them. This excitement to create is something all of us share, no matter our age. And
            don't worry, your perceived level of creativity doesn’t matter, it is the act of doing that counts.
          </h5>
        </div>
      </section>

      <hr />
      <br />
      <br />

      <section id="serviceap">
        <div className="container-fluid">
          <h4>SERVICES WE PROVIDED 🎥</h4>
          <br />
          <div className="row">
            <div className="col-lg-4 mt-4 text-center servicerow">
              <div className="servicewaliimg">
                <img className="rounded-circle mb-4" src={img1} alt="img1" />
              </div>

              <h2>Model/Portrait Shoot</h2>
              <p>Ash Photography provides all types of Model Shoots like Special Portrait Candid Shoots. We specialize in Indoor as Well
                as Outdoor Photography.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>

            <div className="col-lg-4 mt-4 text-center servicerow">
              <div className="servicewaliimg">
                <img className="rounded-circle mb-4" src={img2} alt="img2" />
              </div>
              <h2>Event Shoot</h2>
              <p>Ash Photography provides all types of personal, party, and office events. Our event photographers specialize in capturing
                pictures of birthday parties, office functions, parties, etc.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>

            <div className="col-lg-4 mt-4 text-center servicerow">
              <div className="servicewaliimg">
                <img className="rounded-circle mb-4" src={img3} alt="img3" />
              </div>
              <h2 >Wedding Shoot</h2>
              <p>We have covered more than 1000+ wedding events in Nagpur. Wedding pictures convey sincere feelings like pleasure, love, and
                happy tears. The photos contain all atmospheres of the celebration.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>
          </div>
        </div>
      </section>

      <div className="container" id="like">
        <h2>CLIENTS LOVED <b>OUR PHOTOGRAPHY SERVICES!❤</b></h2>
        <i id="temp" className="fa fa-thumbs-up my-4 animate__animated animate__bounce animate-duration: 800ms;"
          onClick={ lcounter}></i> 

        {/* <i id="temp" className="fa fa-thumbs-up my-4 animate__animated animate__bounce animate-duration: 800ms;"></i> */}
        <br />
        <h3 id="show">4999</h3>
        <br />
        <br />
        <h5>"Happy Clients Loved our Photography services"😍</h5>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />

      <section id="contactap">
        <div className="container mt-2">
          <form>
            <h4>GET IN TOUCH!📨</h4>
            <div className="form-group mt-4">
              <label htmlFor="exampleInputName">Name</label>
              <input type="Name" className="form-control" id="exampleInputName" placeholder="Enter Name" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputTextArea">Any Message Here!</label>
              <input type="TextArea" className="form-control" id="exampleInputTextArea" placeholder="Enter any msg here" />
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
           {/* <a href={"thankyou"}  <button type="submit" className="btn btn-primary">SUBMIT</button> target='_blank'</a> */}
            <button type="submit" className="btn btn-primary">SUBMIT</button> 
          </form>
        </div>

        <hr />

        <div className="container mb-1" id="footerstyle">
          <footer className="page-footer font-small special-color-dark pt-4">
            <div className="footer-copyright text-center py-3">© 2023 Copyright:
              <a href="https://www.instagram.com/_itz_ap_editography/?hl=en">Ash Photography</a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default App;

