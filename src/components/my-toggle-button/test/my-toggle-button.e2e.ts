import { newE2EPage } from '@stencil/core/testing';

describe('my-toggle-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-toggle-button></my-toggle-button>');

    const element = await page.find('my-toggle-button');
    expect(element).toHaveClass('hydrated');
  });
});
