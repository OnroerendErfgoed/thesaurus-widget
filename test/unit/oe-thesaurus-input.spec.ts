import { StageComponent, ComponentTester } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { ApiService } from '../../src/services/api-service';

describe('The thesaurus input component', () => {

  let component: ComponentTester;

  beforeEach(async done => {
    component = StageComponent
      .withResources('src/oe-thesaurus-input')
      .inView(`
        <oe-thesaurus-input type.bind="type" label="naam">
          <template replace-part="suggestion"></template>
        </oe-thesaurus-input>
      `)
      .boundTo({
        type: 'MATERIALEN'
      });
    await component.create(bootstrap);
    done();
  });

  afterEach(() => {
    component.dispose();
  });

  it('should have a type property', () => {
    console.debug(component.viewModel.type);
    expect(component.viewModel).toBeDefined();
  });
});
