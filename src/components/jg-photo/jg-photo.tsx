import { Component, Element, Method, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'jg-photo',
  styleUrl: 'jg-photo.css'
})
export class JgPhoto {
  @Element() el: HTMLElement;

  @Prop() src: string;
  @Prop({ mutable: true, reflect: true }) width: number;
  @Prop({ mutable: true, reflect: true }) height: number;
  @State() scale: number = 100;
  @State() hidden = true;

  @Method()
  async load() {
    const image: HTMLImageElement = this.el.querySelector('img');
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
      image.removeAttribute('data-src');
      this.width = image.naturalWidth;
      this.height = image.naturalHeight;
    }
  }

  @Method()
  async show(scale = this.scale) {
    this.hidden = false;
    this.scale = scale;
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
