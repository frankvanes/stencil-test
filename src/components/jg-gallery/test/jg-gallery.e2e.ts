import { newE2EPage } from '@stencil/core/testing';

describe('jg-gallery', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jg-gallery></jg-gallery>');

    const element = await page.find('jg-gallery');
    expect(element).toHaveClass('hydrated');
  });
});
