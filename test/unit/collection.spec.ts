import { ICollection } from '../../src/models/apiModel';
import { Collection } from '../../src/models/collection';

describe('collection model test', () => {
  const testJson = {
    labels: [
        {
            type: 'prefLabel',
            language: 'nl',
            label: 'beschermd erfgoed'
        }
    ],
    sources: [],
    members: [
        {
            label: 'beschermd monument',
            type: 'concept',
            id: 1,
            uri: 'https://id.erfgoed.net/thesauri/aanduidingstypes/1'
        },
        {
            label: 'beschermd cultuurhistorisch landschap',
            type: 'concept',
            id: 2,
            uri: 'https://id.erfgoed.net/thesauri/aanduidingstypes/2'
        },
        {
            label: 'beschermd stads- of dorpsgezicht',
            type: 'concept',
            id: 3,
            uri: 'https://id.erfgoed.net/thesauri/aanduidingstypes/3'
        },
        {
            label: 'beschermde archeologische site',
            type: 'concept',
            id: 4,
            uri: 'https://id.erfgoed.net/thesauri/aanduidingstypes/4'
        },
        {
            label: 'beschermd varend erfgoed',
            type: 'concept',
            id: 5,
            uri: 'https://id.erfgoed.net/thesauri/aanduidingstypes/5'
        },
        {
            label: 'overgangszone',
            type: 'concept',
            id: 6,
            uri: 'https://id.erfgoed.net/thesauri/aanduidingstypes/6'
        }
    ],
    id: 15,
    concept_scheme: {
        labels: [],
        uri: 'https://id.erfgoed.net/thesauri/aanduidingstypes'
    },
    member_of: [],
    notes: [],
    uri: 'https://id.erfgoed.net/thesauri/aanduidingstypes/15',
    label: 'beschermd erfgoed',
    superordinates: [],
    type: 'collection'
  };

  it('should create an interface', () => {
    const apiCollection = testJson as ICollection;
    expect(apiCollection).toBeTruthy();
  });

  it('should create a collection object', () => {
    const collection = new Collection(testJson as ICollection);
    expect(collection).toBeTruthy();
    expect(collection.uri).toBe('https://id.erfgoed.net/thesauri/aanduidingstypes/15');
    expect(collection.id).toBe(15);
  });
});
