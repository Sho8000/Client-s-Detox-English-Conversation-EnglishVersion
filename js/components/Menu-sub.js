import { Component } from "../common/component.js";
import { BananaPic, subCourseComment, subCourseExp, subCourseImg, subCoursePeriod, subCourseTitle } from "../common/Variable.js";

export class MenuSub extends Component{
  render(){
    for(let i=0;i<subCourseTitle.length;i++){
      //add banana
      let banana = ""
      if(subCourseTitle[i]==="CREW MEAL"){
        banana = BananaPic[6]
      }
      const children = $(
        `<div class="Menu__subCouse__card">
          <div class="Menu__subCouse__card__title"><p class="font_p_xl fontWaitBold">${subCourseTitle[i]}</p></div>
          <div class="Menu__subCouse__card__img"><img src="${subCourseImg[i]}" alt="">${banana}</div>
          <div class="Menu__subCouse__card__period"></div>
          <div class="Menu__subCouse__card__Exp"></div>
          <div class="Menu__subCouse__card__comment"><p class="font_p_m fontWaitBoldNormal">${subCourseComment[i]}</p></div>
        </div>`
      )

      //add period
      for(let j=0;j<subCoursePeriod[i].length;j++){
        //to change the period background
        let periodColor = "";
        if(subCoursePeriod[i][j]==="12ヶ月コース"){
          periodColor = "coursePeriodColorB";
        } else if(subCoursePeriod[i][j]==="6ヶ月コース"){
          periodColor = "coursePeriodColorG";
        } else if(subCoursePeriod[i][j]==="3ヶ月コース"){
          periodColor = "coursePeriodColorY";
        } else if(subCoursePeriod[i][j]==="サブスクコース"){
          periodColor = "coursePeriodColorR";
        }

        const subPeriod = $(
          `<div class="Speriod ${periodColor}"><p class="font_p_L fontWaitBold">${subCoursePeriod[i][j]}</p></div>`
        );
        children.find(".Menu__subCouse__card__period").append(subPeriod);

      }

      //add explain
      for(let k=0;k<subCourseExp[i].length;k++){
        const subExp = $(
          `<div class="SExp">
            <img src="../resource/tabler_check.png" alt="check">
            <p class="font_p_m fontWaitBold">${subCourseExp[i][k]}</p>
          </div>`
        )
        children.find(".Menu__subCouse__card__Exp").append(subExp);
      }

      this.parentElement.append(children);
  
    }
  }
}