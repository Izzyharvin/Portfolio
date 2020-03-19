import React from 'react';
import './Portfolio.css';
import Pet from '../../images/pet.jpg';
import UnknownHeroes from '../../images/unknownheroes.png';
import Marvel from '../../images/marvel.jpg';


var picStyle= {
  opacity: "0.5",
  maxWidth: "90%",
  height: "800px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: "50px",
}

var textStyle= {
  color: "black",
}

function Portfolio() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://lh3.googleusercontent.com/cm3Aj0hNkVbYmDsRfVecHjtN7C4mga1hj1URYSiJYzynD8vYmShDTh2qYg5KLBptNCg" className="d-block w-100" alt="Hangman" style={picStyle} />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={textStyle}>Hangman</h5>
              <p style={textStyle}>This project is a hangman game where you guess the letters of the word and if you get it right you win or if you run out of 10 tries you lose. The languages I used for this project are HTML5, CSS3, and JavaScript.</p>
              <a className="btn btn-primary" href="https://github.com/Izzyharvin/HangmanGame" role="button">Github Link</a>
              <a className="btn btn-primary" href="https://izzyharvin.github.io/HangmanGame/" role="button">Project Link</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://steamuserimages-a.akamaihd.net/ugc/925919427373820977/ED84CAA2CC60E54921D6B433E7042532EE34B6C4/" className="d-block w-100" alt="GifTastic" style={picStyle} />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={textStyle}>GifTastic</h5>
              <p style={textStyle}>This project is a Giphy application where you can choose or create a button and it will show you different GIphy of that Actor. The languages I used for this project are HTML5, CSS3, JavaScript , and JQuery.</p>
              <a className="btn btn-primary" href="https://github.com/Izzyharvin/GifTastic" role="button">Github Link</a>
              <a className="btn btn-primary" href="https://izzyharvin.github.io/GifTastic/" role="button">Project Link</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://image.freepik.com/free-vector/rock-paper-scissors-hand-sign-game_9638-59.jpg" className="d-block w-100" alt="Rock, Paper, Scissor Game" style={picStyle} />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={textStyle}>Rock, Paper, Scissor Game</h5>
              <p style={textStyle}>This app is the basic paper, rock, scissor game using HTML, CSS, and Javascript.</p>
              <a className="btn btn-primary" href="https://github.com/Izzyharvin/Paper-Rock-Sissor" role="button">Github Link</a>
              <a className="btn btn-primary" href="https://izzyharvin.github.io/Paper-Rock-Scissor/" role="button">Project Link</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Pet} className="d-block w-100" alt="Pet Connect" style={picStyle} />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={textStyle}>Pet Connect</h5>
              <p style={textStyle}>In this project you can make a Log In for yourself and after you do that, then you will choose what you want a dog or cat. After you choose then you will do a short survey so that you can find that perfect match between the dog or cat you need. The languages I used where HTML5, CSS3, and JavaScript.</p>
              <a className="btn btn-primary" href="https://github.com/Izzyharvin/Pet-Finder" role="button">Github Link</a>
              <a className="btn btn-primary" href="https://awesomeproject2.herokuapp.com/" role="button">Project Link</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={UnknownHeroes} className="d-block w-100" alt="Unknown Heroes" style={picStyle} />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={textStyle}>Unknown Heroes</h5>
              <p style={textStyle}>This project is a game where you can make your log in account then choose a character use and a enemy to go against. Once you win or lose, the account you use will save you experience points and level ups. The languages I used are HTML5, CSS3, React.js, and MongoDB to save the data of the created log in and the exprience/level up of the characters they use.</p>
              <a className="btn btn-primary" href="https://github.com/Izzyharvin/unknown-heroes" role="button">Github Link</a>
              <a className="btn btn-primary" href="https://unknownheroes.herokuapp.com/" role="button">Project Link</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Marvel} className="d-block w-100" alt="Marvel Search" style={picStyle} />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={textStyle}>Marvel Search</h5>
              <p style={textStyle}>This project is a Marvel Search app where it shows you a list of Marvel Characters and it will show a description with a name and picture of the character. There is alsoi a link button you can click on to go to marvel website to look up comic books or biography of the character you choose. The languages I used are HTML5, CSS3, and React.js.</p>
              <a className="btn btn-primary" href="https://github.com/Izzyharvin/MarvelSearch" role="button">Github Link</a>
              <a className="btn btn-primary" href="https://marvel-searchapp.herokuapp.com/" role="button">Project Link</a>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;