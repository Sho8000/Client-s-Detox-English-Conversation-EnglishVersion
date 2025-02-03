import { Component } from "../common/component.js";
import { BananaPic, mainCouse, mainCouseComment, mainCousesList, mainCousesPeriod, mainCousesTitle } from "../common/Variable.js";
import { MenuSub } from "./Menu-sub.js";

export class Menu extends Component{
  render(){
    if($("#app").hasClass("MenuPage")){
      //Menu main couse part
      const children = $(
        `<section id="Menu">
        <div class="Menu__mainCouse">
          <div class="Menu__mainCouse__card">
            <div class="Menu__mainCouse__card__title"><p class="font_p_xl fontWaitBold">${mainCouse[0]}</p></div>
            <div class="Menu__mainCouse__card__img">
            <img src="${mainCouse[1]}" alt=""></div>
            <div class="Menu__mainCouse__card__explain"><p class="font_p_m fontWaitBoldNormal">${mainCouse[2]}</p></div>
            <div class="Menu__mainCouse__card__courseCardContainer">
            </div>
            <div class="Menu__mainCouse__card__notice"><p class="font_p_m fontWaitBold">${mainCouse[3]}<p></div>
            <div class="Menu__mainCouse__card__showMore">
            <button class="showMoreBtn"><p class="font_p_L fontWaitBold">${mainCouse[4]}</p></button>
            </div>
          </div>
        </div>
        <div class="Menu__subCourse hide">
        </div>
      </section>`
      );

      for(let i=0;i<mainCousesTitle.length;i++){
        //to add talking Banana
        let talkingBNN = (i<2) ? `${BananaPic[7]}` : ``;
        //to hide before click showMore
        let hideFirst = "";
        //to change the period background
        let periodColor = "";
/*         if(mainCousesPeriod[i]==="12ヶ月コース"){
          periodColor = "coursePeriodColorB";
        } else if(mainCousesPeriod[i]==="6ヶ月コース"){
          periodColor = "coursePeriodColorG";
        } else if(mainCousesPeriod[i]==="サブスクコース"){
          periodColor = "coursePeriodColorR";
          hideFirst = "hide";
        } */
        if(mainCousesPeriod[i]==="12-Month Course"){
          periodColor = "coursePeriodColorB";
        } else if(mainCousesPeriod[i]==="6-Month Course"){
          periodColor = "coursePeriodColorG";
        } else if(mainCousesPeriod[i]==="Subscription Course"){
          periodColor = "coursePeriodColorR";
          hideFirst = "hide";
        }
        const courses = $(
          `<div class="Menu__mainCouse__card__courseCard ${hideFirst}">
            <div class="talkingBNN">${talkingBNN}<div>
            <div class="Mtitle"><p class="font_p_L fontWaitBold">${mainCousesTitle[i]}</p></div>
            <div class="Mperiod ${periodColor}"><p class="font_p_m fontWaitBold">${mainCousesPeriod[i]}</p></div>
            <div class="McouseExp"><ul class="McouseExp__ul"></ul></div>
            <div class="Mcomment">${mainCouseComment[i]}</div>
          </div>`
        )
        for(let j=0;j<mainCousesList[i].length;j++){
          const List = $(
            `<li class="McouseExp__li">${mainCousesList[i][j]}</li>`
          )
          courses.find(".McouseExp__ul").append(List);
        }

        children.find(".Menu__mainCouse__card__courseCardContainer").append(courses);
      }

      new MenuSub(children.find(".Menu__subCourse"));

      this.parentElement.append(children);

      $(`.showMoreBtn`).on(`click`,()=>{
        children.find(`.Menu__mainCouse__card__courseCard`).removeClass(`hide`)
        children.find(`.Menu__subCourse`).removeClass(`hide`)
        children.find(`.Menu__mainCouse__card__showMore`).addClass(`hide`)
      })
    }
    
    //animation
    var tlBananaTalking = gsap.timeline();

    var MenuBTalking = $("#Menu").find(".bananaTalking");

    tlBananaTalking.to(MenuBTalking,{
      rotation: -4,
      duration:0.01,
      repeat:100,
    }).repeat(-1).repeatDelay(2)

  }
}