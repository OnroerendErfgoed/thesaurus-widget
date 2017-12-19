import { HttpClientMock } from 'aurelia-http-client-mock';
import { ApiService } from '../../src/services/api-service';

describe('the ApiService module', () => {
  const http = new HttpClientMock();
  const sut = new ApiService(http);
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

  it('saves a record', (done) => {
    sut.getTree().then((record) => {
      console.log(record);
      expect(record).toEqual(testData);
      done();
    });
  });
});
