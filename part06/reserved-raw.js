import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {
  cloud: {
    distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
    apm: [],
  },
  thresholds: {},
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '30s',
      stages: [
        { target: 20, duration: '1m' },
        { target: 20, duration: '3m30s' },
        { target: 0, duration: '1m' },
      ],
      gracefulRampDown: '30s',
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let response

  group('page_2 - https://www.reserved.com/gb/en/customer/account/login/#login', function () {
    response = http.get('https://www.reserved.com/gb/en/customer/account/login/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.reserved.com/gb/en/varnish/ajax/newindex/?1726864558415', {
      headers: {
        accept: 'application/json, text/plain, */*',
        newrelic:
          'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjY2NDM5OCIsImFwIjoiMTU4ODg4OTg3NSIsImlkIjoiNWExYTM3MDNkYTEyYjQyNyIsInRyIjoiOWE0YzY1MDU1NDIyN2Y0MDcyYWIwZDY4OGRhMWMwMDAiLCJ0aSI6MTcyNjg2NDU1ODQxNn19',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        traceparent: '00-9a4c650554227f4072ab0d688da1c000-5a1a3703da12b427-01',
        tracestate: '664398@nr=0-1-664398-1588889875-5a1a3703da12b427----1726864558416',
      },
    })

    response = http.get('https://www.reserved.com/gb/en/varnish/ajax/index/?1726864558424', {
      headers: {
        newrelic:
          'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjY2NDM5OCIsImFwIjoiMTU4ODg4OTg3NSIsImlkIjoiMDQ3MmNmZjU0YzliMmM0NiIsInRyIjoiMTZlN2NjNTk5YWI5MWE1MjZhZTAwZDE3MzdlMDkwMDAiLCJ0aSI6MTcyNjg2NDU1ODQyNH19',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        traceparent: '00-16e7cc599ab91a526ae00d1737e09000-0472cff54c9b2c46-01',
        tracestate: '664398@nr=0-1-664398-1588889875-0472cff54c9b2c46----1726864558424',
      },
    })

    response = http.post('https://www.reserved.com/proxydirectory/549238991762/pageInfo', null, {
      headers: {
        accept: '*/*',
        'content-type': 'application/x-www-form-urlencoded',
        newrelic:
          'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjY2NDM5OCIsImFwIjoiMTU4ODg4OTg3NSIsImlkIjoiNTg4NmIwYmRjN2ExMDZlNSIsInRyIjoiOTZmM2M2NTMyYTNhMWM4NDRlYzFjNTIzYjY3MTRiMDAiLCJ0aSI6MTcyNjg2NDU1ODkzM319',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        traceparent: '00-96f3c6532a3a1c844ec1c523b6714b00-5886b0bdc7a106e5-01',
        tracestate: '664398@nr=0-1-664398-1588889875-5886b0bdc7a106e5----1726864558933',
      },
    })

    response = http.post(
      'https://www.reserved.com/gb/en/ajx/customer/login/referer/aHR0cHM6Ly93d3cucmVzZXJ2ZWQuY29tL2diL2VuLw,,/uenc/aHR0cHM6Ly93d3cucmVzZXJ2ZWQuY29tL2diL2VuLw,,/?lpp_new_login',
      {
        'login[username]': 'performancetests0001@wp.pl',
        'login[password]': 'Qweassd12@',
        'login[remember_me]': '1',
        _dyid: '-8097471174832385081',
        _dyjsession: '',
        form_key: 'mtmOvhKAEz9HcUyL',
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjY2NDM5OCIsImFwIjoiMTU4ODg4OTg3NSIsImlkIjoiOWVmODZkNWYzMzRiMjZmYiIsInRyIjoiZDJiNDY2YWY5MjIxOWZjOTA4ZTM5NDFhMjU5MGQwMDAiLCJ0aSI6MTcyNjg2NDU3MDUxMn19',
          'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-d2b466af92219fc908e3941a2590d000-9ef86d5f334b26fb-01',
          tracestate: '664398@nr=0-1-664398-1588889875-9ef86d5f334b26fb----1726864570512',
          'x-requested-with': 'XMLHttpRequest',
        },
      }
    )
  })

  group('page_3 - https://www.reserved.com/gb/en/', function () {
    response = http.get('https://www.reserved.com/gb/en/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://www.reserved.com/gb/en/varnish/ajax/newindex/?1726864572365', {
      headers: {
        accept: 'application/json, text/plain, */*',
        newrelic:
          'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjY2NDM5OCIsImFwIjoiMTU4ODg4OTg3NSIsImlkIjoiZjg3Yzg1OTAxZjdhZDY5NSIsInRyIjoiYmZlMDRlOTk0NWI2MGEyMzI2ZWVkMWNlZjhmZTY0MDAiLCJ0aSI6MTcyNjg2NDU3MjM2NX19',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        traceparent: '00-bfe04e9945b60a2326eed1cef8fe6400-f87c85901f7ad695-01',
        tracestate: '664398@nr=0-1-664398-1588889875-f87c85901f7ad695----1726864572365',
      },
    })
    response = http.get('https://www.reserved.com/gb/en/varnish/ajax/index/?1726864572451', {
      headers: {
        newrelic:
          'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjY2NDM5OCIsImFwIjoiMTU4ODg4OTg3NSIsImlkIjoiZWNkNDVkY2IzOWJhOTcwYSIsInRyIjoiYzk1NDNlNTkxZjNjOWMzNGYzNGIxNDIxNjJiZGRjMDAiLCJ0aSI6MTcyNjg2NDU3MjQ1MX19',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        traceparent: '00-c9543e591f3c9c34f34b142162bddc00-ecd45dcb39ba970a-01',
        tracestate: '664398@nr=0-1-664398-1588889875-ecd45dcb39ba970a----1726864572451',
      },
    })
    response = http.post('https://www.reserved.com/proxydirectory/549238991762/pageInfo', null, {
      headers: {
        accept: '*/*',
        'content-type': 'application/x-www-form-urlencoded',
        newrelic:
          'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjY2NDM5OCIsImFwIjoiMTU4ODg4OTg3NSIsImlkIjoiNjc5ZjRmNDUzN2IyMTVkMiIsInRyIjoiMGIxZTgxY2MwN2E5NTFlOTIyNDEzYTY4YjYwMGJkMDAiLCJ0aSI6MTcyNjg2NDU3MzUwNX19',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        traceparent: '00-0b1e81cc07a951e922413a68b600bd00-679f4f4537b215d2-01',
        tracestate: '664398@nr=0-1-664398-1588889875-679f4f4537b215d2----1726864573505',
      },
    })
  })

  // Automatically added sleep
  sleep(1)
}
