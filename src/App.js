import { useEffect, useState } from 'react';
import './App.css';
import { NavBar } from './components/navbar';
import { Card } from './components/card';

function App() {

  const [catsState, setCatState] = useState([])
  const [clickedCats, setClickedCats] = useState([])
  const [score, setScore] = useState(0);
  let cats = [
    {
      url: "https://pyxis.nymag.com/v1/imgs/d29/4a6/d8b19f15856697769dc1c586d59ce82bd8-22-cat-video-truth-smoking.rsquare.w700.jpg",
      name: "Wow Cat",
      Cname: "wow-cat"
    },
    {
      url: "https://i.pinimg.com/736x/bd/61/d2/bd61d2b044987182d3383f3029cc66c2.jpg",
      name: "Scraggly Cat",
      Cname: "scraggly-cat"
    },
    {
      url: "https://media.tenor.com/1CH3jcj87Q0AAAAC/silly-cat-cat-meme-face.gif",
      name: "Surprised Cat",
      Cname: "surprised-cat"
    },
    {
      url: "https://i1.sndcdn.com/artworks-fYQ2oqCvNwyzpvF0-YhygSg-t500x500.jpg",
      name: "Aou",
      Cname: "aou"
    },
    {
      url: "https://ih1.redbubble.net/image.4673284403.7474/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
      name: "Milly",
      Cname: "milly"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHiDsgbv9cIjEy5QK7E6g6LGBEXx02IY8_YQ&usqp=CAU",
      name: "Little Party Cat",
      Cname: "little-party-cat"
    },
    {
      url: "https://media.tenor.com/WfebE1HC87AAAAAd/calico-cat.gif",
      name: "Calico Cat",
      Cname: "calico-cat"
    },
    {
      url: "https://i.pinimg.com/736x/97/d0/2a/97d02ad83bbf9161f2a4d73ff8b95195.jpg",
      name: "Hmmmm Cat",
      Cname: "hmmmm-cat"
    },
    {
      url: "https://global.discourse-cdn.com/business7/uploads/mst3k/original/3X/f/4/f4568d422a6c0ec14a0567d726b1ac9096212c2a.jpeg",
      name: "What you looking (C)at",
      Cname: "what-you-lookin-cat"
    },
    {
      url: "https://media.tenor.com/arTEYnOB7agAAAAC/cat-eating-and-stares.gif",
      name: "The Eater",
      Cname: "the-eater"
    },
    {
      url: "https://media.tenor.com/htE-VRxxcCkAAAAM/cheeser-cat.gif",
      name: "Cheeser :)",
      Cname: "cheeser"
    },
    {
      url: "https://media.tenor.com/ACFNYn8d1owAAAAd/funny-animals-bean.gif",
      name: "Bean",
      Cname: "bean"
    },
    {
      url: "https://media.tenor.com/It2xQcjJVqcAAAAM/cat-puhliy.gif",
      name: "Tummy Dance Cat",
      Cname: "tummy-dance-cat"
    },
    {
      url: "https://media.tenor.com/izCcDz-s6XoAAAAS/eepy-and-why-he-eepy.gif",
      name: "And why he eepy",
      Cname: "and-why-he-eepy"
    },
    {
      url: "https://media.tenor.com/3eGE_XIvCO4AAAAM/mimimimimi-cat-sleeping.gif",
      name: "Honk mimimi Cat ",
      Cname: "honk-mimi-cat"
    },
    {
      url: "https://media.tenor.com/9MyTRyvw8LEAAAAS/gaming-cat.gif",
      name: "Gamer Cat",
      Cname: "gamer-cat"
    },
    {
      url: "https://media.tenor.com/EDa9xr4-ZqwAAAAM/goober-kitty.gif",
      name: "Goober Cat",
      Cname: "goober-cat"
    },
    {
      url: "https://media.tenor.com/dqidhQUt5aIAAAAS/kitty-cat.gif",
      name: "Good Cat",
      Cname: "good-cat"
    },
    {
      url: "https://media.tenor.com/sJnOE_eYvFcAAAAC/pusheen.gif",
      name: "Pusheen",
      Cname: "pusheen"
    },
    {
      url: "https://media.tenor.com/eHWFMSY8OKEAAAAS/cat-cat-cute.gif",
      name: "Remidner Cat",
      Cname: "remidner-cat"
    },
    
  ]

  useEffect(() => {
    setCatState(cats)
  }, [])

  const clicked = async (catName, classN) => {
    
    const card = document.querySelector("." + classN)
    const cards = document.querySelectorAll(".card")
    for (const car of cards) {
      car.setAttribute("id", "click-disabled")
    }
    new Promise(resolve => setTimeout(resolve, 700)).then(() => {
      for (const car of cards) {
        car.removeAttribute("id", "click-disabled")
      }
    });
    
    
    for (let i = 0; i < clickedCats.length; i++) {
      if (clickedCats[i] == catName) {
        card.style.cssText = "background-color: red";
        await new Promise(resolve => setTimeout(resolve, 700)).then(() => {card.style.cssText = "background-color: rgb(192, 192, 192);";});
        setClickedCats([])
        setScore(0);
        cats = shuffleArray(cats)
        setCatState(cats)
        return;
      }
    }

    card.style.cssText = "background-color: green";
    await new Promise(resolve => setTimeout(resolve, 700)).then(() => {card.style.cssText = "background-color: rgb(192, 192, 192);";});

    setClickedCats(clickedCats.concat(catName))
    setScore(score + 1);

    cats = shuffleArray(cats)
    setCatState(cats)
  }

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  return (
    <div className="App">
      <NavBar score={score}/>
      <div className="cards-container">
        {catsState.map((item) => {
          return <Card url={item.url} name={item.name} action={clicked} cName={item.Cname}/>
        })}
      </div>
    </div>
  );
}

export default App;
