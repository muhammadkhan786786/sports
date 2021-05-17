import {getSportEventIDs, getSupportEventDetails} from './getSportEvents';

describe('getSportEvents module', () => {
  it('getSportEventIDs function should return null if url is not correct', async () => {
    const response = await getSportEventIDs('www.xyz.com');
    expect(response).toBe(null);
  });

  it('getSupportEventDetails function should return null if eventIDs are not given', async () => {
    const response = await getSupportEventDetails();
    expect(response).toBe(null);
  });

  it('getSupportEventDetails function should return null if eventIDs are not correct', async () => {
    const response = await getSupportEventDetails('1232423234');
    expect(response).toBe(null);
  });
});
