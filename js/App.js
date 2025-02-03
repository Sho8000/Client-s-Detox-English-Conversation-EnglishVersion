import { Component } from "./common/component.js";
import { About } from "./components/About.js";
import { Blog } from "./components/Blog.js";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Hero } from "./components/Hero.js";
import { Index } from "./components/Index.js";
import { Menu } from "./components/Menu.js";
import { Voice } from "./components/Voice.js";

export class App extends Component{
  render(){
    new Header(this.parentElement);

    const children = $(
      `<main></main>`
    )
    this.parentElement.append(children)
    new Hero(children);
    new Index(children);

    new Menu(children);
    new Voice(children);
    new About(children);
    new Blog(children);

    new Footer(this.parentElement);
  }

}