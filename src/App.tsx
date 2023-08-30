import React, { useRef } from 'react';

function App() {
  const myRef = useRef<HTMLAudioElement>(null);

  const onPlay = () => {
    const node: any = myRef.current;
    node.play();
  }
  return (
    <div>
      <div className="grad" id="top">
        <div className="nav">
          <li><a className="waves-effect waves-light" href="#design">about</a></li>
          <li><a className="waves-effect waves-light" href="#projects">projects</a></li>
          <li><a className="waves-effect waves-light" href="#contact">contact me</a></li>
        </div>
        <div className="land wow animted fadeInUp">
          <div className="content">
            <h1 className="heading">Hi, I'm Bunmi  &#128105;&#127995;&#8205;&#128187;</h1>
            <div className="translation">
              <p className="translation-text">/buːmi/</p>
              <button className="translation-btn" onClick={onPlay}>
                <audio ref={myRef} id="myAudio">
                  <source src="https://res.cloudinary.com/dcpfdxsly/video/upload/v1588351970/Bunmi_sptkgn.m4a" type="audio/ogg" />
                  <source src="https://res.cloudinary.com/dcpfdxsly/video/upload/v1588351970/Bunmi_sptkgn.m4a" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <span className="material-icons">volume_up</span>
              </button>
            </div>
            <a className="btn-large min waves-effect see-more" href="#design">see more</a></div>
        </div>
        <div className="container design" id="design">
          <div className="content wow animted fadeIn">
            <div className="row icon-grid">
              <div className="col s12"><i className="lnr lnr-screen"></i></div>
            </div>
            <h3 className="about-me">About Me</h3>
            <div className="row about">
              <div className="col s12 m6 offset-m3">
                <p className="flow-text">I am an experienced software engineer with 6+ years of hands-on experience in crafting scalable,
                  high-performance web applications. Skilled in JavaScript, ReactJS, NodeJS, TypeScript, SQL,
                  and NoSQL databases. When I'm not working with teams to solve challenges, I like to work on my own stuff, check them out below &#128512;</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container projects" id="projects">
          <div className="content flow-content wow animted fadeInUp">
            <div className="row">
              <div className="col s12 center header"><i className="lnr lnr-rocket"></i>
                <h3 className="text-white">Projects</h3>
              </div>
            </div>
            <div className="row project-row">
              <a className="col s12 m6" href="https://main.d22pspoa1d4aei.amplifyapp.com/" target="_blank">
                <div className="card-panel">
                  <h5 className="card-title grey-text text-darken-4">Location Intelligence System</h5><span className="grey-text text-darken-3">This project is a Location Intelligence System that allows users to track and manage vehicle locations.
                    It includes a web-based user interface for interaction and a back-end API for data storage and retrieval.
                    The system utilizes Typescript, React for the front-end development, Node.js and Express for the back-end API, and MongoDB as the database management system. It also integrates with Google Maps Developer APIs for displaying vehicle locations on a map.</span></div>
              </a>
              <a className="col s12 m6" href="https://github.com/bumsyalao/github-searcher" target="_blank">
                <div className="card-panel">
                  <h5 className="card-title grey-text text-darken-4">Github Searcher</h5><span className="grey-text text-darken-3">This project allows users to search through github users and repository.
                    It includes a web-based user interface for interaction and a back-end API for data storage and retrieval.
                    The system utilizes Typescript, React for the front-end development, Node.js and Express for the back-end API, and Redis for caching API request to Github.</span></div>
              </a>
              {/* <a className="col s12 m6" href="https://ideabox-now.herokuapp.com/">
                  <div className="card-panel">
                    <h5 className="card-title grey-text text-darken-4">Ideabox</h5><span className="grey-text text-darken-3">Ideabox is an application that allows users to create a pool of ideas and promote collaboration.</span></div>
                </a> */}
              {/* <a className="col s12 m6" href="https://the-consent-game.herokuapp.com/">
                <div className="card-panel">
                  <h5 className="card-title grey-text text-darken-4">The-Consent-Game</h5><span className="grey-text text-darken-3">The consent game is built for The Consent Workshop, to teach young adults about consent.</span></div>
              </a>
              <a className="col s12 m6" href="https://postit-now.herokuapp.com/">
                <div className="card-panel">
                  <h5 className="card-title grey-text text-darken-4">Post-It</h5><span className="grey-text text-darken-3">Post-it is an application that allows users create groups and post messages to group and promote collaboration.</span></div>
              </a>
              <a className="col s12 m6" href="https://bumsyalao.github.io/Flames/">
                <div className="card-panel">
                  <h5 className="card-title grey-text text-darken-4">Flames</h5><span className="grey-text text-darken-3">A game of love and prediction.</span></div>
              </a> */}
            </div>
          </div>
        </div>
        <div className="container contact" id="contact">
          <div className="content flow-content wow animted fadeInUp">
            <div>
              <div className="row">
                <div className="col s12 center header white-text"><i className="lnr lnr-coffee-cup"></i>
                  <h3 className="text-white">Contact Me</h3>
                </div>
              </div>
              <div className="contacts">
                <a href="https://github.com/bumsyalao" target="_blank"><i className="mdi mdi-github-circle contact-icon animated wobble" /><br />GITHUB</a>
                <a href="mailto:bumsyalao@gmail.com" target="_blank"><i className="mdi mdi-gmail contact-icon" /><br />GMAIL</a>
                <a href="https://bumsyalao.github.io/resume/" target="_blank"><i className="mdi mdi-file-document contact-icon" /><br />RESUME</a>
                <a href="https://www.linkedin.com/in/bumsyalao" target="_blank"><i className="mdi mdi-linkedin-box contact-icon" /><br />LINKEDIN</a>
                <a href="https://medium.com/@bumsyalao12" target="_blank"><i className="mdi mdi-newspaper contact-icon" /><br />MEDIUM</a>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p className="center"> <i className="mdi mdi-copyright"></i>Copyright 2018 | Ruth Alao </p>
        </footer>
      </div> <a className="top waves-effect waves-light" href="#top"><i className="lnr lnr-chevron-up"></i></a>
    </div>
  );
}

export default App;
