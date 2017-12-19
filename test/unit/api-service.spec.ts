import { HttpClientMock } from 'aurelia-http-client-mock';
import { ApiService } from '../../src/services/api-service';
import { IMember } from '../../src/models/apiModel';

describe('the ApiService module', () => {

  let httpMock: HttpClientMock;
  let sut: ApiService;

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

  beforeEach(() => {
    httpMock = new HttpClientMock();
    sut = new ApiService(httpMock);
  });

  it('should call the correct base url', done => {
    httpMock.expect('https://dev-thesaurus.onroerenderfgoed.be/conceptschemes/MATERIALEN/c')
      .withMethod('GET')
      .withResponseStatus(200)
      .withResponseBody(true);

    sut.getConcepts()
      .then(response  => {
        console.debug('response', response);
        expect(response).toBeTruthy();
        done();
      });
  });

  it('should parse the response correctly', done => {
    httpMock.expect('https://dev-thesaurus.onroerenderfgoed.be/conceptschemes/MATERIALEN/c')
      .withMethod('GET')
      .withResponseStatus(200)
      .withResponseBody(testConcepts);

    sut.getConcepts()
      .then(response  => {
        console.debug('response', response);
        expect(response as IMember[]).toEqual(testConcepts as IMember[]);
        done();
      });
    });
});
