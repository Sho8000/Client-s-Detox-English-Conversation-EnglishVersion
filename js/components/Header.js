import { Component } from "../common/component.js";
import { NavTitle } from "../common/Variable.js";

const BASE_CLASS = "header"
let IndexHTML
let AboutHTML
let MenuHTML
let VoiceHTML
let BlogHTML
let facebookIcon
let instagramIcon
let youtubeIcon
if($("#app").hasClass("indexPage")){
  IndexHTML = "index.html";
  AboutHTML = "pages/About.html";
  MenuHTML = "pages/Menu.html";
  VoiceHTML = "pages/Voice.html";
  BlogHTML = "pages/Blog.html";
  facebookIcon = "resource/facebook.png";
  instagramIcon = "resource/instagram.png";
  youtubeIcon = "resource/youtube.png";
} else{
  IndexHTML = "../index.html";
  AboutHTML = "../pages/About.html";
  MenuHTML = "../pages/Menu.html";
  VoiceHTML = "../pages/Voice.html";
  BlogHTML = "../pages/Blog.html";
  facebookIcon = "../resource/facebook.png";
  instagramIcon = "../resource/instagram.png";
  youtubeIcon = "../resource/youtube.png";
}

export class Header extends Component{
  render(){
    const children = $(

      `<header id="${BASE_CLASS}">
      <div class="${BASE_CLASS}__icons__area">
        <div class="${BASE_CLASS}__icons">
          <div><a href="${this.FacebookLink}"><img src="${facebookIcon}" alt="facebook"></a></div>
          <div><a href="${this.InstagramLink}"><img src="${instagramIcon}" alt="instagram"></a></div>
          <div><a href="${this.YoutubeLink}"><img src="${youtubeIcon}" alt="youtube"></a></div>  
        </div>
      </div>
      <nav class="${BASE_CLASS}__nav__PC">
        <a href="${IndexHTML}"><img src="../resource/AkiFAiRWAY.png" alt="youtube"></a>
        <p class="${BASE_CLASS}__title font_p_xl fontWaitBold"></p>
        <div class="${BASE_CLASS}__ulContainer">
          <ul class="${BASE_CLASS}__ul">
            <li class="${BASE_CLASS}__li"><a href="${IndexHTML}" class="font_p_m fontWaitBold">${NavTitle[0]}</a></li>
            <li class="${BASE_CLASS}__li"><a href="${MenuHTML}" class="font_p_m fontWaitBold">${NavTitle[1]}</a></li>
            <li class="${BASE_CLASS}__li"><a href="${VoiceHTML}" class="font_p_m fontWaitBold">${NavTitle[2]}</a></li>
            <li class="${BASE_CLASS}__li"><a href="${AboutHTML}" class="font_p_m fontWaitBold">${NavTitle[3]}</a></li>
            <li class="${BASE_CLASS}__li"><a href="${BlogHTML}" class="font_p_m fontWaitBold">${NavTitle[4]}</a></li>
            <li class="${BASE_CLASS}__li"><a href="${this.LineLink}"><button class="${BASE_CLASS}__li__LINE font_p_m fontWaitBold"><p>LINEで相談！</p></button></a></li>
          </ul>
        </div>
        <div class="${BASE_CLASS}__ulContainerHBG hide">
          <ul class="${BASE_CLASS}__ul">
            <li class="${BASE_CLASS}__li"><a href="${IndexHTML}" class="font_p_m fontWaitBold">${NavTitle[0]}</a></li>
            <li class="${BASE_CLASS}__li"><a href="${MenuHTML}" class="font_p_m fontWaitBold">${NavTitle[1]}</a></li>
            <li class="${BASE_CLASS}__li"><a href="${VoiceHTML}" class="font_p_m fontWaitBold">${NavTitle[2]}</a></li>
            <li class="${BASE_CLASS}__li"><a href="${AboutHTML}" class="font_p_m fontWaitBold">${NavTitle[3]}</a></li>
            <li class="${BASE_CLASS}__li"><a href="${BlogHTML}" class="font_p_m fontWaitBold">${NavTitle[4]}</a></li>
            <li class="${BASE_CLASS}__li"><a href="${this.LineLink}"><button class="${BASE_CLASS}__li__LINE font_p_m fontWaitBold"><p>LINEで相談！</p></button></a></li>
          </ul>
        </div>
        <div class="hamburgerSVG">
          <svg width="60" height="47">
            <rect x="10" y="10" rx="1" ry="1" width="40" height="2"
            style="fill:black;stroke:black;stroke-width:2;" />
            <rect x="10" y="22" rx="1" ry="1" width="40" height="2"
            style="fill:black;stroke:black;stroke-width:2;" />
            <rect x="10" y="34" rx="1" ry="1" width="40" height="2"
            style="fill:black;stroke:black;stroke-width:2;" />
          </svg>
        </div>
      </nav>
    </header>`
    )

    this.parentElement.append(children);

    $(".hamburgerSVG").on("click",()=>{
      $(`.${BASE_CLASS}__ulContainerHBG`).toggleClass("hide");
    })
  }

}