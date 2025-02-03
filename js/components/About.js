import { Component } from "../common/component.js";
import { BananaPic, textTitle, textContent, aboutPics, aboutYoutube, textClassName, textIdName, YoutubeBtnText } from "../common/Variable.js";

export class About extends Component{
  render(){
    if($("#app").hasClass("AboutPage")){

      const children = $(
        `<section id="About">
          <div class="aboutFlexContainer">
          </div>
          <div class="aboutYoutubeContainer">
            <div class="youtubeTitle">${BananaPic[5]}<p class="font_p_xl fontWaitBold">Youtube channel</p></div>
            <div class="youtubeArea"></div>
            <div class="youtubeLink">
              <a href="${this.YoutubeLink}"><button class="youtubeBtn font_p_m fontWaitBold">${YoutubeBtnText}</button></a>
            </div>
          </div>
        </section>`
      )
      //add AboutMe Main part
      for(let i=0; i<textTitle.length;i++){  
        let odd = "";
        if(i%2===1){
          odd = "odd";
        }
        let addAboutFlexContainer = $(
          `<div class="aboutFlex ${odd} ${textClassName[i]}" id="${textIdName[i]}">
            <div class="text">
              <p class="font_p_xl fontWaitBold">${textTitle[i]}</p>
              <p class="font_p_m fontWaitBoldNormal">${textContent[i]}</p>
            </div>
            <div class="pic">
              <img src=${aboutPics[i]} alt="">
            </div>
          </div>`
        )

        children.find(".aboutFlexContainer").append(addAboutFlexContainer);

        if(textClassName[i] === "aboutCALife"){
          children.find(`.${textClassName[i]}`).find(".text").append(BananaPic[3])
        } else if(textClassName[i] === "aboutThought"){
          children.find(`.${textClassName[i]}`).find(".pic").append(BananaPic[0])
        } else if(textClassName[i] === "aboutThoughtRoot"){
          children.find(`.${textClassName[i]}`).find(".pic").append(BananaPic[1]);
        }
      }

      //Youtube channel
      for(let i=0; i<aboutYoutube.length; i++){
        let YoutubeChannel = $(
          `${aboutYoutube[i]}`
        )
        children.find(".youtubeArea").append(YoutubeChannel);
      }
      this.parentElement.append(children)

    }

    //animation
    var tlBananaFly = gsap.timeline();
    var tlBananaBud = gsap.timeline();
    var tlThoughtnessBanana = gsap.timeline();
    var tlBananahalf = gsap.timeline();

    var aboutBFly = $("#About").find(".bananaFly");
    var aboutBBud  = $("#About").find(".bananaBud");
    var aboutBNomal  = $("#About").find(".bananaNomal");
    var aboutBHalf = $("#About").find(".bananaHalfPeeled");
  
    tlBananaFly.to(aboutBFly,{
      rotation: 15,
      duration:3,
      repeat:-1,
      ease: "power1.inOut",
      yoyo: true,
      repeatDelay: 1,
    })

    tlBananaBud.to(aboutBBud,{
      y: 10,
      duration:5,
      repeat:-1,
      ease: "power1.inOut",
      yoyo: true,
      repeatDelay: 1,
    })

    tlThoughtnessBanana.to(aboutBNomal,{
      x: -20,
      duration:3,
      repeat:-1,
      ease: "power4",
      yoyo: true,
    })

    tlBananahalf.from(aboutBHalf,{
      scaleX: 1,
      ease: "power1.inOut",
      duration:1.5,
    }).to(aboutBHalf,{
      scaleX: -1,
      duration:1.5,
      repeat:-1,
      ease: "power1.inOut",
      yoyo: true,
    })
  }
}