import { StageComponent, ComponentTester } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';

describe('The thesaurus tree component', () => {

  let component: ComponentTester;

  beforeEach(async done => {
    component = StageComponent
      .withResources('src/oe-thesaurus-tree')
      .inView(`<oe-thesaurus-tree value.bind='value' nodes.bind='nodes'
                config.bind='config'>
               </oe-thesaurus-tree>`)
      .boundTo({
        value: null,
        config: {
          type: 'MATERIALEN',
          baseUrl: 'https://www.mock.be/'
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
    expect(component.viewModel.config.type).toBeDefined();
    expect(component.viewModel.config.type).toBe('MATERIALEN');
  });

  it('should have a baseUrl property', () => {
    expect(component.viewModel.config.baseUrl).toBeDefined();
    expect(component.viewModel.config.baseUrl).toBe('https://www.mock.be/');
  });
});
