import { group } from 'k6';
import {yourCalledMethod} from '../api/feature/getExemple.js'

export function FlowToTest() {

  group('Your_group', function () {
    yourCalledMethod()
  })
}
