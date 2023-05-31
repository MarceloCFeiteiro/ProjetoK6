import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js"
import { FlowToTest } from "./Scenarios/Scenarios.js"


export const options = {
  thresholds: {
    'group_duration{group:::Your_group}': [{ threshold: 'avg < 20', abortOnFail: true }],
    'http_req_failed{group:::Your_group}': [{ threshold: 'rate < 0.01', abortOnFail: true }],
    'group_duration{group:::Your_group}': [{ threshold: 'avg < 20', abortOnFail: true }],
    'http_req_duration{group:::Your_group}': [{ threshold: 'p(95) < 200', abortOnFail: true }]
  }
}

export function setup() {
}

export default function () {
  FlowToTest()
}

export function handleSummary(data) {
  return {
    "./report/report.html": htmlReport(data)
  }
}

export function teardown() {
}
