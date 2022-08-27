import { parseData } from '../parse-data';

describe('Test for parseData util', () => {
  test('Should pased data', () => {
    const data = {
      data: {
        hits: [
          {
            created_at: '2002-08-26T00:27:26.000Z',
            author: 'didericis',
            story_title:
              'Threats of Blackouts Drive Japan to Embrace Nuclear Again',
            story_url:
              'https://financialpost.com/pmn/business-pmn/threats-of-blackouts-drive-japan-to-embrace-nuclear-again',
            objectID: '32601835',
            otherField: 'test',
          },
        ],
        nbPages: 1,
      },
    };
    const expected = {
      data: [
        {
          created_at: '2002-08-26T00:27:26.000Z',
          author: 'didericis',
          story_title:
            'Threats of Blackouts Drive Japan to Embrace Nuclear Again',
          story_url:
            'https://financialpost.com/pmn/business-pmn/threats-of-blackouts-drive-japan-to-embrace-nuclear-again',
          objectID: '32601835',
        },
      ],
      meta: {
        nbPages: 1,
      },
    };
    expect(parseData(data)).toEqual(expected);
  });
});
