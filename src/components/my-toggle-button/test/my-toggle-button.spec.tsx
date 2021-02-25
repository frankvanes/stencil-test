import { newSpecPage } from '@stencil/core/testing';
import { MyToggleButton } from '../my-toggle-button';

describe('my-toggle-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyToggleButton],
      html: `<my-toggle-button></my-toggle-button>`,
    });
    expect(page.root).toEqualHtml(`
      <my-toggle-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-toggle-button>
    `);
  });
});
