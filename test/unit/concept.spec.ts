import { IConcept } from '../../src/models/apiModel';
import { Concept } from '../../src/models/concept';

describe('concept model test', () => {
  const testJson = {
    subordinate_arrays: [],
    matches: {
        close: [],
        narrow: [],
        exact: [],
        related: [],
        broad: []
    },
    labels: [
        {
            type: 'prefLabel',
            language: 'nl',
            label: 'beschermd varend erfgoed'
        }
    ],
    narrower: [],
    related: [],
    sources: [],
    broader: [],
    id: 5,
    concept_scheme: {
        labels: [],
        uri: 'https://id.erfgoed.net/thesauri/aanduidingstypes'
    },
    member_of: [
        {
            label: 'beschermd erfgoed',
            type: 'collection',
            id: 15,
            uri: 'https://id.erfgoed.net/thesauri/aanduidingstypes/15'
        }
    ],
    notes: [],
    uri: 'https://id.erfgoed.net/thesauri/aanduidingstypes/5',
    label: 'beschermd varend erfgoed',
    type: 'concept'
  };

  it('should create an interface', () => {
    const apiConcept = testJson as IConcept;
    expect(apiConcept).toBeTruthy();
  });

  it('should create a concept object', () => {
    const concept = new Concept(testJson as IConcept);
    expect(concept).toBeTruthy();
    expect(concept.uri).toBe('https://id.erfgoed.net/thesauri/aanduidingstypes/5');
    expect(concept.id).toBe(5);
  });
});
