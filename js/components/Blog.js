import { Component } from "../common/component.js";

export class Blog extends Component{
  render(){
    if($("#app").hasClass("BlogPage")){

      const children = $(
        `<section id="blogContainer">
          <div class="container">
            <iframe src=${this.BlogLink} frameborder="0">
            </iframe>
          </div>
        </section>`
      )
      
      this.parentElement.append(children)
    }
  }
}