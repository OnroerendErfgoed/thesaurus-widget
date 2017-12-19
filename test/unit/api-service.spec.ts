import { HttpClientMock } from 'aurelia-http-client-mock';
import { ApiService } from '../../src/services/api-service';

describe('the ApiService module', () => {

  let httpMock;
  let sut;

  const testData = [
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
          label: 'porselein'
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

  beforeEach(() => {
    httpMock = new HttpClientMock();
    sut = new ApiService(httpMock);
  });

  it('should call the correct base url', done => {
    httpMock.expect('https://dev-thesaurus.onroerenderfgoed.be/conceptschemes/MATERIALEN/c')
      .withMethod('GET')
      .withResponseStatus(200);

    sut.getConcepts()
      .then(response  => {
        expect(response).toBe('');
        done();
      });
  });
});
