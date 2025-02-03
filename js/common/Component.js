export class Component {
  #parentElement;
  #props;
  #context;
  #websiteName;
  #LineLink;
  #YoutubeLink;
  #FacebookLink;
  #InstagramLink;
  #BlogLink;
  #GoogleReview;
  #YoutubeEnglishClassLink;
  constructor(parentElement, props = {}, context = {}){
    this.#parentElement = parentElement;
    this.#props = props;
    this.#context = context;
    this.#websiteName = "AKiF Airways."
    this.#LineLink = "https://line.me/R/ti/p/@dih3004d?ts=08061721&oat_content=url";
    this.#YoutubeLink = "https://m.youtube.com/user/youtsubeful";
    this.#FacebookLink = "https://www.facebook.com/AQUIXXX?mibextid=ZbWKwL";
    this.#InstagramLink = "https://www.instagram.com/akifumitsukamoto777/?igsh=emkyOW1tdmpsencw&utm_source=qr";
    this.#BlogLink = "https://torch-coaching.com/blog/";
    this.#GoogleReview = "https://maps.app.goo.gl/6caGt2TinGZGS8pWA";
    this.#YoutubeEnglishClassLink = "https://www.youtube.com/@%E7%A9%BA%E9%A3%9B%E3%81%B6%E8%8B%B1%E4%BC%9A%E8%A9%B1%E3%83%92%E3%83%BC%E3%83%A9%E3%83%BCAKIF"
  
    this.render();
  }

  get parentElement(){
    return this.#parentElement;
  }

  get props(){
    return this.#props;
  }

  get context(){
    return this.#context;
  }

  get websiteName(){
    return this.#websiteName;
  }

  get LineLink(){
    return this.#LineLink
  }

  get YoutubeLink(){
    return this.#YoutubeLink;
  }

  get FacebookLink(){
    return this.#FacebookLink;
  }

  get InstagramLink(){
    return this.#InstagramLink;
  }

  get BlogLink(){
    return this.#BlogLink;
  }

  get GoogleReview(){
    return this.#GoogleReview;
  }

  get YoutubeEnglishClassLink(){
    return this.#YoutubeEnglishClassLink;
  }

  render(){
    throw new Error("All components must implement render method!");
  }
}