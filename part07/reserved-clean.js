import { group } from 'k6'
import http from 'k6/http'

export const options = {
  cloud: {
    distribution: { 'amazon:de:frankfurt': { loadZone: 'amazon:de:frankfurt', percent: 100 } },
  },
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '30s',
      stages: [
        { target: 5, duration: '30s' },
        { target: 5, duration: '30s' },
        { target: 0, duration: '30s' },
      ],
      exec: 'reservedLogin',
    },
  },
}

export function reservedLogin() {
  let response

  group('Login Page - https://www.reserved.com/gb/en/customer/account/login/#login', function () {
    response = http.get('https://www.reserved.com/gb/en/customer/account/login/', {
    })

    response = http.get('https://www.reserved.com/gb/en/varnish/ajax/newindex/?1726864558415', {
    })

    response = http.get('https://www.reserved.com/gb/en/varnish/ajax/index/?1726864558424', {
    })

    response = http.post('https://www.reserved.com/proxydirectory/549238991762/pageInfo', null)

    response = http.post(
      'https://www.reserved.com/gb/en/ajx/customer/login/referer/aHR0cHM6Ly93d3cucmVzZXJ2ZWQuY29tL2diL2VuLw,,/uenc/aHR0cHM6Ly93d3cucmVzZXJ2ZWQuY29tL2diL2VuLw,,/?lpp_new_login',
      {
        'login[username]': 'performancetests0001@wp.pl',
        'login[password]': 'Qweasd12@',
        'login[remember_me]': '1',
        form_key: 'mtmOvhKAEz9HcUyL',
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      }
    )
  })

  group('Main Page After User Log In - https://www.reserved.com/gb/en/', function () {
    response = http.get('https://www.reserved.com/gb/en/', {
    })
    response = http.get('https://www.reserved.com/gb/en/varnish/ajax/newindex/?1726864572365', {
    })
    response = http.get('https://www.reserved.com/gb/en/varnish/ajax/index/?1726864572451', {
    })
    response = http.post('https://www.reserved.com/proxydirectory/549238991762/pageInfo', null)
  })
}
