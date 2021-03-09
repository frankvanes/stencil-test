import { Component, Element, Method, Prop, State, h } from '@stencil/core';

//type Dimensions = {
//  width: number,
//  weight: number
//}

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
  @State() loaded = false;

  componentDidLoad() {
    //const image: HTMLImageElement = Array.prototype.slice.call(this.el.children)[0];
    const image: HTMLImageElement = this.el.querySelector('img');
    console.log(image);

    return new Promise((resolve, reject) => {
      image.onload = () => { resolve(image); };
      image.onerror = (err) => { reject(err.toString) }
    }).then((img: HTMLImageElement) => {
      this.width = img.naturalWidth;
      this.height = img.naturalHeight;
    }).catch((err) => console.log(err));
  }

  @Method()
  async load() {
    if (this.loaded) return;
    const image: HTMLImageElement = this.el.querySelector('img');
    image.setAttribute('src', image.getAttribute('data-src'));
    image.removeAttribute('data-src');
  }

  @Method()
  async show(scale = this.scale) {
    this.hidden = false;
    this.scale = scale;
  }

  @Method()
  async getDimensions() {
    const image: HTMLImageElement = this.el.querySelector('img');
    return new Promise((resolve, reject) => {
      if (image.naturalWidth && image.naturalHeight) {
        resolve({width: image.naturalWidth, height: image.naturalHeight});
      }
      image.onload = () => {
        resolve({width: image.naturalWidth, height: image.naturalHeight});
      }
      image.onerror = (err) => { reject(err.toString) }
    });
  }

  render() {
    return (
      <img style={{width:this.scale+'%', display:(this.hidden?'none':'inline-block')}} src={ this.src } />
    );
  }
}
