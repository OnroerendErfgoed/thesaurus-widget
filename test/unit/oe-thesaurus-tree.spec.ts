import { StageComponent, ComponentTester } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';

describe('The thesaurus tree component', () => {

  let component: ComponentTester;

  beforeEach(async done => {
    component = StageComponent
      .withResources('src/oe-thesaurus-tree')
      .inView('<oe-thesaurus-tree></oe-thesaurus-tree>')
      .boundTo({ });
    await component.create(bootstrap);
    done();
  });

  afterEach(() => {
    component.dispose();
  });

  it('should render the text', () => {
    const text = (component.element.textContent || '').trim();
    expect(text).toEqual('tree: oe-thesaurus-tree');
  });
});
