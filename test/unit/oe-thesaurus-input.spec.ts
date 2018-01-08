import { StageComponent, ComponentTester } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { ApiService } from '../../src/services/api-service';

describe('The thesaurus input component', () => {

  let component: ComponentTester;

  beforeEach(async done => {
    component = StageComponent
      .withResources('src/oe-thesaurus-input')
      .inView(`
        <oe-thesaurus-input type.bind="type" minlength.bind="minlength" base-url.bind="baseUrl" label="naam">
          <template replace-part="suggestion"></template>
        </oe-thesaurus-input>
      `)
      .boundTo({
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
});
