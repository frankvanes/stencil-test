import { newSpecPage } from '@stencil/core/testing';
import { JgPhoto } from '../jg-photo';

describe('jg-photo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JgPhoto],
      html: `<jg-photo></jg-photo>`,
    });
    expect(page.root).toEqualHtml(`
      <jg-photo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jg-photo>
    `);
  });
});
