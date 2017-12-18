import { ITree } from '../../src/models/apiModel';

describe('tree model test', () => {
  const testJson = [
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
    },
    {
        children: [
            {
                children: [],
                type: 'concept',
                id: '38.39',
                concept_id: 39,
                label: 'gewapend beton'
            }
        ],
        type: 'concept',
        id: '38',
        concept_id: 38,
        label: 'beton'
    },
    {
        children: [],
        type: 'concept',
        id: '49',
        concept_id: 49,
        label: 'cement'
    },
    {
        children: [],
        type: 'concept',
        id: '7',
        concept_id: 7,
        label: 'glas'
    },
    {
        children: [],
        type: 'concept',
        id: '20',
        concept_id: 20,
        label: 'kunststof'
    },
    {
        children: [
            {
                children: [],
                type: 'concept',
                id: '8.48',
                concept_id: 48,
                label: 'aluminium'
            },
            {
                children: [
                    {
                        children: [],
                        type: 'concept',
                        id: '8.9.10',
                        concept_id: 10,
                        label: 'bladgoud'
                    }
                ],
                type: 'concept',
                id: '8.9',
                concept_id: 9,
                label: 'goud'
            },
            {
                children: [],
                type: 'concept',
                id: '8.11',
                concept_id: 11,
                label: 'ijzer'
            },
            {
                children: [
                    {
                        children: [
                            {
                                children: [],
                                type: 'concept',
                                id: '8.12.13.14',
                                concept_id: 14,
                                label: 'brons'
                            },
                            {
                                children: [],
                                type: 'concept',
                                id: '8.12.13.15',
                                concept_id: 15,
                                label: 'messing'
                            }
                        ],
                        type: 'concept',
                        id: '8.12.13',
                        concept_id: 13,
                        label: 'koperlegeringen'
                    }
                ],
                type: 'concept',
                id: '8.12',
                concept_id: 12,
                label: 'koper'
            },
            {
                children: [],
                type: 'concept',
                id: '8.16',
                concept_id: 16,
                label: 'lood'
            },
            {
                children: [],
                type: 'concept',
                id: '8.17',
                concept_id: 17,
                label: 'staal'
            },
            {
                children: [],
                type: 'concept',
                id: '8.18',
                concept_id: 18,
                label: 'tin'
            },
            {
                children: [],
                type: 'concept',
                id: '8.19',
                concept_id: 19,
                label: 'zilver'
            }
        ],
        type: 'concept',
        id: '8',
        concept_id: 8,
        label: 'metaal'
    },
    {
        children: [
            {
                children: [],
                type: 'concept',
                id: '21.23',
                concept_id: 23,
                label: 'bont'
            },
            {
                children: [
                    {
                        children: [],
                        type: 'concept',
                        id: '21.24.25',
                        concept_id: 25,
                        label: 'dierlijk botmateriaal'
                    },
                    {
                        children: [],
                        type: 'concept',
                        id: '21.24.26',
                        concept_id: 26,
                        label: 'menselijk botmateriaal'
                    }
                ],
                type: 'concept',
                id: '21.24',
                concept_id: 24,
                label: 'botmateriaal'
            },
            {
                children: [],
                type: 'concept',
                id: '21.27',
                concept_id: 27,
                label: 'gewei'
            },
            {
                children: [],
                type: 'concept',
                id: '21.28',
                concept_id: 28,
                label: 'hoorn'
            },
            {
                children: [
                    {
                        children: [],
                        type: 'concept',
                        id: '21.29.30',
                        concept_id: 30,
                        label: 'leer'
                    }
                ],
                type: 'concept',
                id: '21.29',
                concept_id: 29,
                label: 'huid'
            },
            {
                children: [
                    {
                        children: [],
                        type: 'concept',
                        id: '21.32.33',
                        concept_id: 33,
                        label: 'amber'
                    },
                    {
                        children: [],
                        type: 'concept',
                        id: '21.32.35',
                        concept_id: 35,
                        label: 'hout'
                    },
                    {
                        children: [],
                        type: 'concept',
                        id: '21.32.36',
                        concept_id: 36,
                        label: 'houtskool'
                    },
                    {
                        children: [],
                        type: 'concept',
                        id: '21.32.37',
                        concept_id: 37,
                        label: 'textiel'
                    }
                ],
                type: 'concept',
                id: '21.32',
                concept_id: 32,
                label: 'plantaardig materiaal'
            }
        ],
        type: 'concept',
        id: '21',
        concept_id: 21,
        label: 'organisch materiaal'
    }
  ];

  it('should create an interface', () => {
    const apiTree = testJson as ITree;
    expect(apiTree).toBeTruthy();
  });
});
