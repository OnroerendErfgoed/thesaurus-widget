import { StageComponent, ComponentTester } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';

describe('The thesaurus input component', () => {

  let component: ComponentTester;

  beforeEach(async done => {
    component = StageComponent
      .withResources('src/oe-thesaurus-input')
      .inView('<oe-thesaurus-input></oe-thesaurus-input>')
      .boundTo({ });
    await component.create(bootstrap);
    done();
  });

  afterEach(() => {
    component.dispose();
  });

  it('should render the text', () => {
    const text = (component.element.textContent || '').trim();
    expect(text).toEqual('input: oe-thesaurus-input');
  });
});
