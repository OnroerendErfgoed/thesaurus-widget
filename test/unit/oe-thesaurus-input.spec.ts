import { StageComponent, ComponentTester } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';

describe('The thesaurus input component', () => {

  let component: ComponentTester;

  beforeEach(async done => {
    component = StageComponent
      .withResources('src/oe-thesaurus-input')
      // .inView('<oe-thesaurus-input></oe-thesaurus-input>')
      .inView(`
        <oe-thesaurus-input service.bind="service" label="naam">
          <template replace-part="suggestion"></template>
        </oe-thesaurus-input>
      `)
      .boundTo({
        service: { suggest: () => ( ['test', 'test2'] ) }
      });
    await component.create(bootstrap);
    done();
  });

  afterEach(() => {
    component.dispose();
  });

  it('should render the text', () => {
    console.debug(component);
    const text = (component.element.textContent || '').trim();
    expect(text).toEqual('input: oe-thesaurus-input');
  });
});
