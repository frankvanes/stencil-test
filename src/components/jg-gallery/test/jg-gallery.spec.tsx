import { newSpecPage } from '@stencil/core/testing';
import { JgGallery } from '../jg-gallery';

describe('jg-gallery', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JgGallery],
      html: `<jg-gallery></jg-gallery>`,
    });
    expect(page.root).toEqualHtml(`
      <jg-gallery>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jg-gallery>
    `);
  });
});
