import { Component, Element, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'jg-gallery',
  styleUrl: 'jg-gallery.css',
})
export class JgGallery {
  @Element() el: HTMLElement;
  @State() images: HTMLJgPhotoElement[] = [];
  @Prop() preferredHeight = 300;

  componentWillLoad() {
    this.el.querySelectorAll('jg-photo').forEach((image) => {
      this.images.push(image as HTMLJgPhotoElement);
      console.log('IMAGE: ' + image.outerHTML);
    });
    this.images.forEach((image) => {
      image.load();
    });
  }

  buildRow() {
    this.justify(this.images);
    this.images = null;
  }

  justify(images: HTMLJgPhotoElement[]) {
    const totalWidth300 = images.reduce((acc, image) => {
      console.log("Adding " + image.width);
      return acc + image.width;
    }, 0);
    console.log(totalWidth300);
    images.forEach((image) => {
      image.show();
    });
  }

  buildRows() {
    while (this.images && this.images.length) {
      this.buildRow();
    }
  }

  render() {
    return (
      <Host>
        {
          this.buildRows()
        }
      </Host>
    );
  }

}
