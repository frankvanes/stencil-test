import { newE2EPage } from '@stencil/core/testing';

describe('jg-photo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jg-photo></jg-photo>');

    const element = await page.find('jg-photo');
    expect(element).toHaveClass('hydrated');
  });
});
