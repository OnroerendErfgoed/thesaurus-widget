export interface ITree {
  children: ITreeConcept[];
}

export interface ITreeConcept {
  children: ITreeConcept[];
  concept_id: number;
  id: string;
  label: string;
  type: string;
}

export interface ICollection {
  
}

export interface IConcept {
  
}

/* COLLECTION
{
    "labels": [
        {
            "type": "prefLabel",
            "language": "nl",
            "label": "beschermd erfgoed"
        }
    ],
    "sources": [],
    "members": [
        {
            "label": "beschermd monument",
            "type": "concept",
            "id": 1,
            "uri": "https://id.erfgoed.net/thesauri/aanduidingstypes/1"
        },
        {
            "label": "beschermd cultuurhistorisch landschap",
            "type": "concept",
            "id": 2,
            "uri": "https://id.erfgoed.net/thesauri/aanduidingstypes/2"
        },
        {
            "label": "beschermd stads- of dorpsgezicht",
            "type": "concept",
            "id": 3,
            "uri": "https://id.erfgoed.net/thesauri/aanduidingstypes/3"
        },
        {
            "label": "beschermde archeologische site",
            "type": "concept",
            "id": 4,
            "uri": "https://id.erfgoed.net/thesauri/aanduidingstypes/4"
        },
        {
            "label": "beschermd varend erfgoed",
            "type": "concept",
            "id": 5,
            "uri": "https://id.erfgoed.net/thesauri/aanduidingstypes/5"
        },
        {
            "label": "overgangszone",
            "type": "concept",
            "id": 6,
            "uri": "https://id.erfgoed.net/thesauri/aanduidingstypes/6"
        }
    ],
    "id": 15,
    "concept_scheme": {
        "labels": [],
        "uri": "https://id.erfgoed.net/thesauri/aanduidingstypes"
    },
    "member_of": [],
    "notes": [],
    "uri": "https://id.erfgoed.net/thesauri/aanduidingstypes/15",
    "label": "beschermd erfgoed",
    "superordinates": [],
    "type": "collection"
}
*/

/* CONCEPT
{
    "subordinate_arrays": [],
    "matches": {
        "close": [],
        "narrow": [],
        "exact": [],
        "related": [],
        "broad": []
    },
    "labels": [
        {
            "type": "prefLabel",
            "language": "nl",
            "label": "beschermd varend erfgoed"
        }
    ],
    "narrower": [],
    "related": [],
    "sources": [],
    "broader": [],
    "id": 5,
    "concept_scheme": {
        "labels": [],
        "uri": "https://id.erfgoed.net/thesauri/aanduidingstypes"
    },
    "member_of": [
        {
            "label": "beschermd erfgoed",
            "type": "collection",
            "id": 15,
            "uri": "https://id.erfgoed.net/thesauri/aanduidingstypes/15"
        }
    ],
    "notes": [],
    "uri": "https://id.erfgoed.net/thesauri/aanduidingstypes/5",
    "label": "beschermd varend erfgoed",
    "type": "concept"
}
*/
