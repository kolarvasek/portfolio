import React from 'react';
import SnowfallBackground from './components/Snowflake';
function App() {

  const toggleDarkMode = () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark')
    console.log("HoHoHo")
  }
  const scroll = () => {

  }

  return (
    <div className="page m-0 p-0 bg-slate-600 min-h-screen">
      <SnowfallBackground />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=dark_mode"
      />

      <div className="home">
        <h1>Wenceslas</h1>
        <button onClick={toggleDarkMode}>
          <span className="material-symbols-outlined">dark_mode</span>
        </button>
        <p className="">
          Hello, I'm Wenceslas, a frontend developer.
        </p>
        <button>Contant me</button>
      </div>
      <div className="about">
        <h2>About me</h2>
        <p className="">
          I'm a Full Stack Developer focusing on React & Python. I love building
          intuitive, interactive, and user-friendly websites and mobile apps. My
          journey started with exploring LANGUAGE, and now I create web apps
          that combine creativity with functionality.
        </p>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>React</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Git</li>
          <li>PHP</li>
        </ul>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <div className="card"></div>
      </div>
      <div className="contact">
        <h2>Contact me</h2>
        <p>Email: email@email.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Instagram</p>
        <p>Github</p>
      </div>
      <div className="footer">
        <p>© 2024 Wenceslas. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;