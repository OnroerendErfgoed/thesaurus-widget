import { StageComponent, ComponentTester } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { ApiService } from '../../src/services/api-service';

describe('The thesaurus component', () => {

  let component: ComponentTester;

  beforeEach(async done => {
    component = StageComponent
      .withResources('src/oe-thesaurus-component')
      .inView(`
        <oe-thesaurus-component value.bind="value" type.bind="type" base-url.bind="baseUrl" minlength.bind="minlength">
        </oe-thesaurus-component>
      `)
      .boundTo({
        value: null,
        type: 'MATERIALEN',
        minlength: 2,
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

  it('should have a minlength property', () => {
    expect(component.viewModel.minlength).toBeDefined();
    expect(component.viewModel.minlength).toBe(2);
  });

  it('should have a baseUrl property', () => {
    expect(component.viewModel.baseUrl).toBeDefined();
    expect(component.viewModel.baseUrl).toBe('https://www.mock.be/');
  });
});
