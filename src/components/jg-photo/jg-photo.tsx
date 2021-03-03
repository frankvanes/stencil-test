import { Component, Element, Method, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'jg-photo',
  styleUrl: 'jg-photo.css'
})
export class JgPhoto {
  @Element() el: HTMLElement;

  @Prop() src: string;
  @Prop() scale: number = 50;
  @State() hidden = true;

  @Method()
  async load() {
    const image: HTMLImageElement = this.el.querySelector('img');
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
      image.removeAttribute('data-src');
      console.log(image.naturalHeight + "x" + image.naturalWidth + " (" + (image.naturalWidth / image.naturalHeight) + ")");
    }
  }

  @Method()
  async show() {
    this.hidden = false;
    this.scale = 10;
  }

  @Method()
  async getHeight() {
    const image: HTMLImageElement = this.el.querySelector('img');
    return image.naturalHeight;
  }

  render() {
    return (
      <img style={{width:this.scale+'%', display:(this.hidden?'none':'inline-block')}} data-src={ this.src } />
    );
  }
}
