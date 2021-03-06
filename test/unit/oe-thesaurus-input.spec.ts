import { StageComponent, ComponentTester } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { ApiService } from '../../src/services/api-service';

describe('The thesaurus input component', () => {

  let component: ComponentTester;

  beforeEach(async done => {
    component = StageComponent
      .withResources('src/oe-thesaurus-input')
      .inView(`
        <oe-thesaurus-input value.bind="value" config.bind="config">
          <template replace-part="suggestion"></template>
        </oe-thesaurus-input>
      `)
      .boundTo({
        value: null,
        config: {
          type: 'MATERIALEN',
          minlength: 2,
          baseUrl: 'https://www.mock.be/'
        }
      });
    await component.create(bootstrap);
    done();
  });

  afterEach(() => {
    component.dispose();
  });

  it('should have a type property', () => {
    expect(component.viewModel.config.type).toBeDefined();
    expect(component.viewModel.config.type).toBe('MATERIALEN');
  });

  it('should have a minlength property', () => {
    expect(component.viewModel.config.minlength).toBeDefined();
    expect(component.viewModel.config.minlength).toBe(2);
  });

  it('should have a baseUrl property', () => {
    expect(component.viewModel.config.baseUrl).toBeDefined();
    expect(component.viewModel.config.baseUrl).toBe('https://www.mock.be/');
  });
});
