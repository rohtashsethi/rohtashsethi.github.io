import { CustomCasePipe } from './custom-case.pipe';

describe('CustomCasePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomCasePipe();
    expect(pipe).toBeTruthy();
  });
});
