import { Component, Element, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'jg-gallery',
  styleUrl: 'jg-gallery.css',
})
export class JgGallery {
  @Element() el: HTMLElement;
  @State() images: NodeListOf<HTMLJgPhotoElement>;
  @Prop() preferredHeight = 300;

  componentWillLoad() {
    this.images = this.el.querySelectorAll('jg-photo');
    this.images.forEach((image) => {
      image.load();
      image.getHeight().then((height) => console.log(height));
      image.show();
    });
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
