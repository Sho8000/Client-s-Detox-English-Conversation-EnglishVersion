import { Component } from "../common/component.js";
import { LineBtnText } from "../common/Variable.js";

const BASE_CLASS = "hero";

let hero__title;
let Page;
let BackgroundImg;
let IndexParagraph;
let TitleImg = "";
if($("#app").hasClass("AboutPage")){
//  hero__title = "自己紹介"
  hero__title = "Self-introduction"
  Page = "AboutPage"
  BackgroundImg = "url(../resource/About_hero.png)"
} else if($("#app").hasClass("BlogPage")){
//  hero__title = "ブログ"
  hero__title = "Blog"
  Page = "BlogPage"
  BackgroundImg = "url(../resource/About_hero.png)"
} else if($("#app").hasClass("VoicePage")){
//  hero__title = "乗客の声"
  hero__title = "Passenger testimonials"
  TitleImg = `<img src="../resource/peeled.svg" alt="">`
  Page = "VoicePage"
  BackgroundImg = "url(../resource/Menu_hero.png)"
} else if($("#app").hasClass("MenuPage")){
//  hero__title = "コース"
  hero__title = "Course"
  Page = "MenuPage"
  BackgroundImg = "url(../resource/Menu_hero.png)"
} else if($("#app").hasClass("indexPage")){
//  hero__title = "話したいと思ってから<br>何年経つんですか？"
  hero__title = `How many years has it been <br>since you wanted to speak?`
  Page = "IndexPage";
  BackgroundImg = "url(resource/20241010_Hero-Tsukamoto-san.png)"
//  IndexParagraph = "結局、同じところに居ませんか？まだ同じところに居たいですか？<br>本当はそこにはもう居たくないはず<br>もう飛び立ってもいいかもしれませんね<br>It’s time to TAKE OFF."
  IndexParagraph = `Ultimately, aren't you still in the same place? Do you still want to stay there?<br>You probably don't truly want to be there anymore.<br>It might be time to take off.<br>It's time to TAKE OFF.`
}

export class Hero extends Component{
  render(){
    let children = "";
    if($("#app").hasClass("indexPage")){
      children = $(
        `<section id="heroSection">
          <div class="hero ${Page}__hero heroMain">
            <div class="${Page}__hero__container">
              <h1 class="hero__title fontWaitBold">${hero__title}</h1>
              <p class="hero__comment font_p_L fontWaitBoldNormal">${IndexParagraph}</p>
            </div>
            <div class="LineLink">
              <a href="${this.LineLink}"><button class="lineBtn font_p_m fontWaitBold">${LineBtnText}</button></a>
            </div>
          </div>
        </section>`
      )
    } else{
      children = $(
        `<section id="heroSection">
          <div class="hero ${Page}__hero heroSub">
            <h1 class="hero__title fontWaitBold">${hero__title}</h1>
            ${TitleImg}
          </div>
        </section>`
      )
    }
    this.parentElement.append(children);
    this.parentElement.find(`.${Page}__hero`).css('background-image', `${BackgroundImg}`)
  }
}