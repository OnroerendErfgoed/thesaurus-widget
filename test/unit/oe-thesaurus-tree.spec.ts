import { StageComponent, ComponentTester } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';

describe('The thesaurus tree component', () => {

  let component: ComponentTester;

  beforeEach(async done => {
    component = StageComponent
      .withResources('src/oe-thesaurus-tree')
      .inView(`<oe-thesaurus-tree update-value.call='updateValue(x)' nodes.bind='nodes'
                type.bind='type' base-url.bind='baseUrl'>
               </oe-thesaurus-tree>`)
      .boundTo({
        type: 'MATERIALEN',
        baseUrl: 'https://www.mock.be/',
        updateValue: function updateValue(value) {
          this.value = value;
        },
        nodes: [
          {
              children: [
                  {
                      children: [],
                      type: 'concept',
                      id: '1.2',
                      conceptId: 2,
                      label: 'pijpaarde'
                  },
                  {
                      children: [],
                      type: 'concept',
                      id: '1.5',
                      conceptId: 5,
                      label: 'porselein'
                  },
                  {
                      children: [],
                      type: 'concept',
                      id: '1.6',
                      conceptId: 6,
                      label: 'steengoed'
                  }
              ],
              type: 'concept',
              id: '1',
              conceptId: 1,
              label: 'aardewerk'
          },
          {
              children: [
                  {
                      children: [],
                      type: 'concept',
                      id: '38.39',
                      conceptId: 39,
                      label: 'gewapend beton'
                  }
              ],
              type: 'concept',
              id: '38',
              conceptId: 38,
              label: 'beton'
          },
          {
              children: [],
              type: 'concept',
              id: '49',
              conceptId: 49,
              label: 'cement'
          }]
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

  it('should have a baseUrl property', () => {
    expect(component.viewModel.baseUrl).toBeDefined();
    expect(component.viewModel.baseUrl).toBe('https://www.mock.be/');
  });
});
