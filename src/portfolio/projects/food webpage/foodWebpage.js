import React from "react";
import { Link } from "react-router-dom";
import "./foodWebpage.css";
import "./foodWebpagePhone.css";

function FoodWebpage() {
  return (
    <>
      <nav id="navbar">
        <div id="logo">
          <img
            src={require(`../projectImages/food-logo-1.png`)}
            alt="MyOnlineMeal"
          />
        </div>
        <ul>
          <li class="item">
            <Link to="#">Home</Link>
          </li>
          <li class="item">
            <Link to="#">About Us</Link>
          </li>
          <li class="item">
            <Link to="#">Services</Link>
          </li>
          <li class="item">
            <Link to="#">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <section id="home">
        <h1 class="h-primary">Welcome to MyOnlineMeal</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quis
          eum, consequuntur, necessitatibus asperiores, dolor maiores maxime cum
          rerum non quidem voluptatum! Sapiente magnam, iure architecto nobis
          sit aliquam dicta praesentium mollitia blanditiis reprehenderit!
        </p>
        <button class="btn">Order Now</button>
      </section>
      <section class="services-container">
        <h1 class="h-primary center">Our Services</h1>
        <div id="services">
          <div class="box">
            <img src={require(`../projectImages/food-wb1.jpg`)} alt="" />
            <h2 class="h-secondary center">Food Ordering</h2>
            <p class="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              possimus rerum odit dignissimos magni ue a in?Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Esse reiciendis blanditiis
              aliquam omnis maxime. Repudiandae perspiciatis nobis omnis est!
              Eos?
            </p>
          </div>
          <div class="box">
            <img src={require(`../projectImages/food-wb2.jpg`)} alt="" />
            <h2 class="h-secondary center">Food Catering</h2>
            <p class="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              possimus rerum odit dignissimos magni ue a in? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Deserunt sequi ad maiores
              et repudiandae illo minus dolor officiis. Cupiditate, eius?
            </p>
          </div>
          <div class="box">
            <img src={require(`../projectImages/food-wb3.jpg`)} alt="" />
            <h2 class="h-secondary center">Bulk Ordering</h2>
            <p class="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              possimus rerum odit dignissimos magni ue a in? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Aspernatur, est expedita
              sunt error earum eaque culpa maiores dicta tenetur dolore.
            </p>
          </div>
        </div>
        <section id="client-section">
          <h1 class="h-primary center">Our Clients</h1>
          <div id="clients">
            <div class="client-item">
              <img
                src={require(`../projectImages/food-client-1.png`)}
                alt="Our Client"
              />
            </div>
            <div class="client-item">
              <img
                src={require(`../projectImages/food-client-2.png`)}
                alt="Our Client"
              />
            </div>
            <div class="client-item">
              <img
                src={require(`../projectImages/food-client-3.png`)}
                alt="Our Client"
              />
            </div>
            <div class="client-item">
              <img
                src={require(`../projectImages/food-client-4.png`)}
                alt="Our Client"
              />
            </div>
          </div>
        </section>
      </section>
      <section id="contact">
        <h1 class="h-primary center">Contact Us</h1>
        <div id="contact-box">
          <form action="">
            <div class="form-group">
              <label for="name">Name:</label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div class="form-group">
              <br />
              <label for="name">E-mail:</label>
              <br />{" "}
              <input
                type="email"
                name="E-mail"
                id="E-mail"
                placeholder="Enter your mail"
              />
            </div>
            <div class="form-group">
              <br /> <label for="mob">Mobile:</label>
              <br />
              <input
                type="number"
                name="mob"
                id="mob"
                placeholder="Enter your mobile number"
              />
            </div>
            <div class="form-group">
              <br />
              <label for="your-text">Message:</label>
              <br />
              <textarea
                name="your-text"
                id="your-text"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </form>
        </div>
      </section>
      <footer>
        <div class="center">
          Copyright &copy;www.MyOnlineMeal.com.All rights reserved!
        </div>
      </footer>
    </>
  );
}

export default FoodWebpage;
