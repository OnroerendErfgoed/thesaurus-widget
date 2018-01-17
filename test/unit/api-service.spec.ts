import { HttpClientMock } from 'aurelia-http-client-mock';
import { ApiService } from '../../src/services/api-service';
import { ITree, IMember, IConcept } from '../../src/models/apiModel';

describe('the ApiService module', () => {

  let httpMock: HttpClientMock;
  let sut: ApiService;
  const apiBaseUrl = 'https://www.mock.be/';

  const testConcepts = [
    {
        label: 'zilver',
        type: 'concept',
        id: 19,
        uri: 'https://id.erfgoed.net/thesauri/materialen/19'
    },
    {
        label: 'wommersomkwartsiet',
        type: 'concept',
        id: 45,
        uri: 'https://id.erfgoed.net/thesauri/materialen/45'
    }
  ];

  const testTree = [
    {
        children: [
            {
                children: [],
                type: 'concept',
                id: '1.2',
                concept_id: 2,
                label: 'pijpaarde'
            },
            {
                children: [],
                type: 'concept',
                id: '1.5',
                concept_id: 5,
                lbel: 'porselein'
            },
            {
                children: [],
                type: 'concept',
                id: '1.6',
                concept_id: 6,
                label: 'steengoed'
            }
        ],
        type: 'concept',
        id: '1',
        concept_id: 1,
        label: 'aardewerk'
    }
  ];

  const testConceptById = {
      id: 19,
      subordinate_arrays: [],
      matches: {},
      labels: [
          {
              type: 'prefLabel',
              language: 'nl-BE',
              label: 'zilver'
          }
      ],
      narrower: [],
      related: [],
      sources: [
          {
              citation: 'Nederlandse Art &amp; Architecture Thesaurus'
          }
      ],
      broader: [
          {
              label: 'metaal',
              type: 'concept',
              id: 8,
              uri: 'https://id.erfgoed.net/thesauri/materialen/8'
          }
      ],
      member_of: [],
      notes: [
          {
              note: 'Te gebruiken voor het zuivere metaalelement met het symbool Ag.',
              type: 'scopeNote',
              language: 'nl-BE'
          }
      ],
      uri: 'https://id.erfgoed.net/thesauri/materialen/19',
      label: 'zilver',
      type: 'concept'
  };

  beforeEach(() => {
    httpMock = new HttpClientMock();
    sut = new ApiService(apiBaseUrl, httpMock);
  });

  it('should call the correct base url', done => {
    httpMock.expect(apiBaseUrl + 'conceptschemes/MATERIALEN/c')
      .withMethod('GET')
      .withResponseStatus(200)
      .withResponseBody(true);

    sut.getConcepts('MATERIALEN')
      .then(response  => {
        expect(response).toBeTruthy();
        done();
      });
  });

  it('should parse the concepts response correctly', done => {
    httpMock.expect(apiBaseUrl + 'conceptschemes/MATERIALEN/c?label=aard')
      .withMethod('GET')
      .withResponseStatus(200)
      .withResponseBody(testConcepts);

    sut.getConcepts('MATERIALEN', { label: 'aard' })
      .then(response => {
        expect(response as IMember[]).toEqual(testConcepts as IMember[]);
        expect(response as IMember[]).toContain(jasmine.objectContaining({id: 19}));
        done();
    });
  });

  it('should parse the tree response correctly', done => {
    httpMock.expect(apiBaseUrl + 'conceptschemes/MATERIALEN/tree')
      .withMethod('GET')
      .withResponseStatus(200)
      .withResponseBody(testTree);

    sut.getTree('MATERIALEN')
      .then(response => {
        expect(response as ITree).toEqual(testTree as ITree);
        expect(response as ITree).toContain(jasmine.objectContaining({ concept_id: 1 }));
        done();
    });
  });

  it('should parse the conceptById response correctly', done => {
    httpMock.expect(apiBaseUrl + 'conceptschemes/MATERIALEN/c/19')
      .withMethod('GET')
      .withResponseStatus(200)
      .withResponseBody(testConceptById);

    sut.getConceptById('MATERIALEN', 19)
      .then(response => {
        if (response) {
          expect(response as IConcept).toEqual(testConceptById as IConcept);
          expect(response.id).toBe(19);
        }
        done();
    });
  });
});
