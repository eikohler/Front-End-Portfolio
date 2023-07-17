import React from 'react';

function About() {
  return (
    <div className="row mx-0 justify-content-center">        
      <div className="col-lg-7 col-sm-10 text-center">
        <p><span>Hello!</span> I'm a Vancouver-based Front-End Developer specializing in 
        building and growing eCommerce platforms with advanced skills in HTML, CSS, JavaScript, 
        jQuery, Bootstrap, React and PHP.</p>
        <p>My background is in Computer Science and Visual Arts from Brock University. 
          As well, I've completed the Full Stack Coding BootCamp from Carleton University 
          and further went on to assist in teaching the same course at the University of Richmond.
          I have 2+ years experience working alongside designers 
          and developers to bring client's ideas and design concepts to life.</p>        
        <p>See my past work projects <a href="#work">below.</a></p>
      </div>
    </div>
  );
}

export default About;