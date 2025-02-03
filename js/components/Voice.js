import { Component } from "../common/component.js";
import { Pictures, voiceTitle, customerVoice, googleReviews, customerVoiceFull } from "../common/Variable.js"

export class Voice extends Component{
  render(){

    const children = $(
      `<section id="Voice">
        <div class="VoiceCardContainer">
        </div>
        <div class="GoogleReview">
          <h3 class="GoogleReviewTitle">Google Reviews</h3>
          <div class="GoogleReviewContainer"></div>
          <div class="showMore">
          <a href="${this.GoogleReview}"><button class="showMoreBtn"><p class="font_p_L fontWaitBold">Read more</p></button></a>
          </div>
        </div>
      </section>`
    );

    if($("#app").hasClass("VoicePage")){
      //Voice Part
      for(let i=0;i<Pictures.length;i++){
        let addVoiceCard = "";
        const addComments = $(
          `<p class="font_p_m fontWaitBold">${customerVoice[i]}</p>
          <p class="font_p_m fontWaitBold hide">${customerVoiceFull[i]}</p>`
        )
        let checkType = Pictures[i].split(" ")
        if(checkType[0] === "<iframe"){
          //For upload youtube "iframe" data
          addVoiceCard = $(
            `<div class="VoiceCard">
              <div class="VoiceTitle">
                <p class="font_p_L fontWaitBold">${voiceTitle[i]}</p>
              </div>
              <div class="VoiceYoutube">
                ${Pictures[i]}
              </div>
              <div class="VoiceComment">
              </div>
            </div>`
          );  

        } else{
          //For upload picture "img" data
          addVoiceCard = $(
            `<div class="VoiceCard">
              <div class="VoiceTitle">
                <p class="font_p_L fontWaitBold">${voiceTitle[i]}</p>
              </div>
              <div class="VoiceYoutube">
                <img src="${Pictures[i]}" alt="">
              </div>
              <div class="VoiceComment">
              </div>
            </div>`
          );
        }
        children.find(".VoiceCardContainer").append(addVoiceCard);
        addVoiceCard.find(".VoiceComment").append(addComments);
        $(addVoiceCard).on(`click`,()=>{
          console.log("dsfaj")
          $(addComments).toggleClass('hide');
        })
      }

      //Voice Part
      for(let i=0;i<googleReviews.length;i++){
        const addGoogleReview = $(
          `<div class="VoiceCard">
            <div class="VoiceYoutube">
              <img src="${googleReviews[i]}" alt="review">
            </div>
          </div>`
        );
        children.find(".GoogleReviewContainer").append(addGoogleReview);
      }


      this.parentElement.append(children);
    }

  }
}