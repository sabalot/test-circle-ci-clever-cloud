import request from 'supertest';
import { addition } from '../src/utils/maths.utils';
import router from '../src/loader/app';

const app = router();

describe('test app', () => {
  it('test addition', () => {
    const result = addition(5, 12);

    expect(result).toEqual(17);
  });

  it('responds to /', async () => {
    await request(app).get('/hello').expect(200).expect('hello world 12');
  });
});
