import http from 'k6/http';
import { loadJson } from '../../common/jsonFunctions.js'
import { sleep } from 'k6';

const baseUrl = loadJson('../../configs/settings.json').baseUrl
const headers = loadJson('../../configs/headers.json')

export default function () {
  const resp = http.get(`${baseUrl}/usuarios/${_id}`, { headers: headers });

  sleep(1);

  console.log(resp.json('quantidade'))
}