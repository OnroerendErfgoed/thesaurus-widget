import { StageComponent, ComponentTester } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';

describe('The thesaurus tree component', () => {

  let component: ComponentTester;

  beforeEach(async done => {
    component = StageComponent
      .withResources('src/oe-thesaurus-tree')
      .inView('<oe-thesaurus-tree type.bind="type" base-url.bind="baseUrl"></oe-thesaurus-tree>')
      .boundTo({
        type: 'MATERIALEN',
        baseUrl: 'https://www.mock.be/'
      });
    await component.create(bootstrap);
    done();
  });

  afterEach(() => {
    component.dispose();
  });

  it('should have a type property', () => {
    expect(component.viewModel.type).toBeDefined();
    expect(component.viewModel.type).toBe('MATERIALEN');
  });
});
