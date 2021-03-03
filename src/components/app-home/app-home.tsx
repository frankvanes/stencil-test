import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>

        <my-toggle-button text="Dit is een test" on={true}></my-toggle-button>
        <my-toggle-button text="Nog eentje, maar dan uit"></my-toggle-button>

        <jg-gallery>
          <jg-photo src="https://photos.smugmug.com/Albums/2021/Trips/i-6h8mjFV/0/0be57091/S/2021-01-02-untitled-56-Edit-S.jpg" />
          <jg-photo src="https://photos.smugmug.com/Albums/2021/Trips/i-7QBxP6F/0/7f219ec1/S/2021-01-16-het-weegje-85-S.jpg" />
          <jg-photo src="https://photos.smugmug.com/Albums/2021/Trips/i-hSLWcQK/0/7d25fdf8/S/2021-01-02-untitled-27-S.jpg" />
        </jg-gallery>
      </div>
    );
  }
}
