import { Component } from "../common/component.js";
import { NavTitle } from "../common/Variable.js";


const BASE_CLASS = "footer"
let IndexHTML
let AboutHTML
let MenuHTML
let VoiceHTML
let BlogHTML
let facebookIcon
let instagramIcon
let youtubeIcon
if($("#app").hasClass(".indexPage")){
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


export class Footer extends Component{
  render(){
    let children;
      children = $(
        `<footer id="${BASE_CLASS}">
          <div class="${BASE_CLASS}__container">
            <p class="${BASE_CLASS}__title font_p_xl fontWaitBold"><a href="${IndexHTML}">${this.websiteName}</a></p>
            <div class="${BASE_CLASS}__ulContainer">
              <ul class="${BASE_CLASS}__ul">
                <li class="${BASE_CLASS}__li"><a href="${IndexHTML}" class="font_p_m fontWaitBold">${NavTitle[0]}</a></li>
                <li class="${BASE_CLASS}__li"><a href="${MenuHTML}" class="font_p_m fontWaitBold">${NavTitle[1]}</a></li>
                <li class="${BASE_CLASS}__li"><a href="${VoiceHTML}" class="font_p_m fontWaitBold">${NavTitle[2]}</a></li>
                <li class="${BASE_CLASS}__li"><a href="${AboutHTML}" class="font_p_m fontWaitBold">${NavTitle[3]}</a></li>
                <li class="${BASE_CLASS}__li"><a href="${BlogHTML}" class="font_p_m fontWaitBold">${NavTitle[4]}</a></li>
              </ul>
            </div>
            <div class="${BASE_CLASS}__icons">
              <div><a href="${this.FacebookLink}"><img src="${facebookIcon}" alt="facebook"></a></div>
              <div><a href="${this.InstagramLink}"><img src="${instagramIcon}" alt="instagram"></a></div>
              <div><a href="${this.YoutubeLink}"><img src="${youtubeIcon}" alt="youtube"></a></div>  
            </div>
          </div>
        </footer>`
      )
    this.parentElement.append(children)
  }
}
