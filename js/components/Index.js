import { Component } from "../common/component.js";
import { IndexContents, IndexYoutube, IndexSubbomment, Pictures, voiceTitle, BananaPic, IndexSubbommentThoughtness, IndexCourseTitle, IndexCoursePeriod, IndexCourseComment, IndexCourseExp, textIdName, mainCouse } from "../common/Variable.js";

const BASE_CLASS = "indexPage";

export class Index extends Component{
  render(){
    if($("#app").hasClass("indexPage")){
      //add section container
      const children = $(
        `<section id="${BASE_CLASS}__contents">
          <div class="${BASE_CLASS}__container">
          </div>
        </section>`
      )
      for(let i=0;i<IndexContents.length;i++){
      //add each section contents
      let odd = "";
        if(i%2===0){
          odd = "odd";
        }
        const eachSections = $(
          `<div class="${BASE_CLASS}__items ${IndexContents[i]} ${odd}"></div>`
        )
        children.find(`.${BASE_CLASS}__container`).append(eachSections)

        //add each content
        let eachContents;
        switch (IndexContents[i]) {
          case "Youtube":
            eachContents = $(
              `<swiper-container class="mySwiper" navigation="true" pagination="true" effect="coverflow" grab-cursor="true" centered-slides="true" slides-per-view="auto" coverflow-effect-rotate="50" coverflow-effect-stretch="0" coverflow-effect-depth="100" coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true">
                <swiper-slide>
                  ${IndexYoutube[0]}
                  <div class="filterLeft"></div>
                  <div class="filterRight"></div>
                </swiper-slide>
                <swiper-slide>
                  ${IndexYoutube[1]}
                  <div class="filterLeft"></div>
                  <div class="filterRight"></div>
                </swiper-slide>
                <swiper-slide>
                  ${IndexYoutube[2]}
                  <div class="filterLeft"></div>
                  <div class="filterRight"></div>
                </swiper-slide>
              </swiper-container>
              <div class="youtubeLink">
                <a href="${this.YoutubeEnglishClassLink}"><button class="youtubeBtn font_p_m fontWaitBold">Youtube チャンネルはこちら</button></a>
              </div>`
              )
              children.find(".Youtube").append(eachContents)  
            break;

          case "Maincomment":
            eachContents = $(
              `<div class="comments">
                <div class="mainComment">
                  <img src="resource/buchake.png" alt="mainComment" class="buchakePC">
                  <img src="resource/Buchake_Phone.png" alt="mainComment" class="buchakePhone">
                </div>
                <div class="lineBtn">
                  <a href="${this.LineLink}"><button class="lineBtn"><p class="font_p_m fontWaitBold">LINEで相談！</p></button></a></div>
              </div>
              <div class="mainPic">
                <img src="resource/Tsukamoto-san.png" alt="mainPic">
              </div>`
            )
            children.find(".Maincomment").append(eachContents)
            break;

          case "Course":
            eachContents = $(
              `<div class="courseContainer">
                <div class="CourseTitle">
                  <p class="font_p_xl fontWaitBold">コース</p>
                </div>
                <div class="CourseListContainer">
                  <div class="CourseList"></div>
                </div>
                <div class="readMore courseContainerReadMore">
                <button class="showMoreBtn"><p class="font_p_L fontWaitBold">${mainCouse[4]}</p></button>
                </div>
              </div>`
            )

            for(let i=0;i<IndexCourseTitle.length;i++){
              //to add talking Banana
              let talkingBNN = (i<2) ? `${BananaPic[7]}` : ``;

              //to change the period background
              let periodColor = "";
              if(IndexCoursePeriod[i]==="12ヶ月コース"){
                periodColor = "coursePeriodColorB";
              } else if(IndexCoursePeriod[i]==="6ヶ月コース"){
                periodColor = "coursePeriodColorG";
              }
              let courseContents = $(
                `<div class="courseCard">
                  <div class="cTitle"><p class="font_p_L fontWaitBold">${IndexCourseTitle[i]}</p></div>
                  <div class="cPeriod ${periodColor}"><p class="font_p_m fontWaitBold">${IndexCoursePeriod[i]}</p></div>
                  <div class="cExp"><ul class="list"></ul></div>
                  <div class="cComment"><p class="font_p_m fontWaitBoldNormal">${IndexCourseComment[i]}</p></div>
                  <div class="Banana">${talkingBNN}</div>

                </div>`
              )
              for(let j=0;j<IndexCourseExp[i].length;j++){
                const List = $(
                  `<li>${IndexCourseExp[i][j]}</li>`
                )
                courseContents.find(".list").append(List);
              }
              eachContents.find(".CourseList").append(courseContents);
            }

            children.find(".Course").append(eachContents);
            
            $(eachContents).find(".readMore").on(`click`,()=>{
              window.location.replace(`../pages/Menu.html`);
            });
              
            break;

          case "SubcommentThoughtness":
            eachContents = $(
              `<div class="SubcommentThoughtnessContainer">
                <div class="comments">
                  <p class="font_p_xl fontWaitBold">${IndexSubbommentThoughtness[0]}</p>
                  <p class="font_p_m fontWaitBoldNormal">${IndexSubbommentThoughtness[1]}</p>

                  <div class="readMore SubcommentTReadMore">
                  <button class="showMoreBtn"><p class="font_p_L fontWaitBold">${mainCouse[4]}</p></button>
                  </div>
                </div>
                <div class="images">
                  ${IndexSubbommentThoughtness[3]}
                  <div class="subImg">
                    ${BananaPic[0]}
                  </div>
                </div>
              </div>`
            )
            children.find(".SubcommentThoughtness").append(eachContents);

            $(eachContents).find(".readMore").on(`click`,()=>{
              window.location.replace(`../pages/About.html#${textIdName[2]}`);
            });
                         
            break;

          case "Subcomment":
            eachContents = $(
              `<div class="SubcommentContainer">
                <div class="comments">
                  <p class="font_p_xl fontWaitBold">${IndexSubbomment[0]}</p>
                  <p class="font_p_m fontWaitBoldNormal">${IndexSubbomment[1]}</p>

                  <div class="readMore SubcommentCReadMore">
                  <button class="showMoreBtn"><p class="font_p_L fontWaitBold">${mainCouse[4]}</p></button>
                  </div>

                </div>
                <div class="images">
                  ${IndexSubbomment[3]}
                  <div class="subImg">
                    ${BananaPic[1]}
                  </div>
                </div>
              </div>`
            )
            children.find(".Subcomment").append(eachContents);

            $(eachContents).find(".readMore").on(`click`,()=>{
              window.location.replace(`../pages/About.html#${textIdName[3]}`);
            });

            break;

          case "Voice":
            eachContents = $(
              `<div class="voiceContainer">
                <div class="titleContainer">
                  <p class="font_p_xl fontWaitBold">乗客の声</p>
                  ${BananaPic[6]}
                </div>
                <div class="cardContainer"></div>

                <div class="readMore voiceCReadMore">
                  <button class="showMoreBtn"><p class="font_p_L fontWaitBold">${mainCouse[4]}</p></button>
                </div>
              </div>`
            )
            for(let i=0; i<2; i++){
              const addIndexVoiceCard = $(
                `<div class="voiceCard">
                  <p class="font_p_L fontWaitBold">${voiceTitle[i]}</p>
                  ${Pictures[i]}
                </div>`
              )
              eachContents.find(".cardContainer").append(addIndexVoiceCard)
            }

            children.find(".Voice").append(eachContents);      

            $(eachContents).on(`click`,()=>{
              window.location.replace(`../pages/Voice.html`);
            });

            
            break;

          default:
            break;
        }
      }

      this.parentElement.append(children);

    //sound
/* 
    <audio id="myAudio">
      <source src="../resource/airportSound.mp3" type="audio/mp3">
    </audio>

    const audio = document.getElementById("myAudio");
    audio.volume = 0.3;
    audio.play();
 */
    }

    //animation
    var tlBananaTalking = gsap.timeline();
    var tlBananaNomal = gsap.timeline();
    var tlBananaBud = gsap.timeline();
    var tlBananaPeeled = gsap.timeline();

    var indexBTalking = $("#indexPage__contents").find(".bananaTalking");
    var indexBNomal = $("#indexPage__contents").find(".bananaNomal");
    var indexBBud = $("#indexPage__contents").find(".bananaBud");
    var indexBPeeled = $("#indexPage__contents").find(".bananaPeeled");

    tlBananaTalking.to(indexBTalking,{
      rotation: 3,
      duration:0.01,
      repeat:100,
    }).repeat(-1).repeatDelay(2)

    tlBananaNomal.to(indexBNomal,{
      x: -20,
      duration:3,
      repeat:-1,
      ease: "power1.inOut",
      yoyo: true,
      repeatDelay:2,
    })

    tlBananaBud.to(indexBBud,{
      y: 50,
      opacity:0.5,
      duration:5,
      repeat:-1,
      ease: "power1.inOut",
      yoyo: true,
      repeatDelay: 1,
    })

    tlBananaPeeled.from(indexBPeeled,{
      scaleX: 1,
      ease: "power1.inOut",
      duration:1.5,
    }).to(indexBPeeled,{
      scaleX: -1,
      duration:1.5,
      repeat:-1,
      ease: "power1.inOut",
      yoyo: true,
    })

  }
}