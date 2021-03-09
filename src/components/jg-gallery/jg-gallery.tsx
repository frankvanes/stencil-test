import { Component, Element, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'jg-gallery',
  styleUrl: 'jg-gallery.css',
})
export class JgGallery {
  @Element() el: HTMLElement;
  @State() photos: HTMLJgPhotoElement[] = [];
  @Prop() preferredHeight = 300;
  preload = 20;

  componentWillLoad() {
    this.photos = Array.prototype.slice.call(this.el.children);
    //this.photos.slice(0,this.preload).map(image => image.load());
  }

  componentDidRender() {
    this.photos.map((image) => console.log(image.width));
    this.buildRows();
  }

  buildRows(increment = 3) {
    let start = 0, end = increment;
    let currentSlice = [];

    while ((currentSlice = this.photos.slice(start, end)).length) {
      this.justify(currentSlice);
      start = end;
      end += increment;
    }
  }

  buildRow() {
    this.justify(this.photos);
  }

  justify(photos: HTMLJgPhotoElement[]) {
    const totalWidth300 = photos.reduce((acc, image) => {
      console.log("Adding " + image.width);
      return acc + image.width;
    }, 0);
    console.log(totalWidth300);
    photos.forEach((image) => {
      image.show();
    });
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }

}
