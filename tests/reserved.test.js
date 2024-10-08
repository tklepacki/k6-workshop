import { group } from 'k6'
import http from 'k6/http'

export const options = {
  cloud: {
    distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
  },
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '30s',
      stages: [
        { target: 3, duration: '30s' },
        { target: 3, duration: '30s' },
        { target: 0, duration: '0s' },
      ],
      exec: 'reserved_login',
    },
  },
}

export function reserved_login() {
  let getCustomerAccountLoginPageRequest = {
    method: 'GET',
    url: 'https://www.reserved.com/gb/en/customer/account/login/',
  }

  let getVarnishAjaxNewIndexRequest = {
    method: 'GET',
    url: 'https://www.reserved.com/gb/en/varnish/ajax/newindex/?1728379786319'
  }

  let getVarnishAjaxIndexRequest = {
    method: 'GET',
    url: 'https://www.reserved.com/gb/en/varnish/ajax/index/?1728379786327'
  }

  let postPageInfoRequest = {
    method: 'POST',
    url: 'https://www.reserved.com/proxydirectory/549238991762/pageInfo'
  }

  let postCustomerLoginRequest = {
    method: 'POST',
    url: 'https://www.reserved.com/gb/en/ajx/customer/login/referer/aHR0cHM6Ly93d3cucmVzZXJ2ZWQuY29tL2diL2VuLw,,/uenc/aHR0cHM6Ly93d3cucmVzZXJ2ZWQuY29tL2diL2VuLw,,/?lpp_new_login',
    body: {
      'login[username]': 'performancetests0001@wp.pl',
      'login[password]': 'Qweasd12@',
      'login[remember_me]': '1',
      form_key: 'zzHK37SOqj4iVrPD',
    },
    params: {
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }
    }
  }

  let getMainPageRequest = {
    method: 'GET',
    url: 'https://www.reserved.com/gb/en/'
  }

  group('Login Page - https://www.reserved.com/gb/en/customer/account/login/#login', function () {
    http.get(getCustomerAccountLoginPageRequest.url)

    http.get(getVarnishAjaxNewIndexRequest.url)

    http.get(getVarnishAjaxIndexRequest.url)

    http.post(postPageInfoRequest.url, null)

    http.post(postCustomerLoginRequest.url, postCustomerLoginRequest.body, postCustomerLoginRequest.params)
  })

  group('Main Page After User Log In - https://www.reserved.com/gb/en/', function () {
    http.get(getMainPageRequest)

    http.get(getVarnishAjaxNewIndexRequest.url)

    http.get(getVarnishAjaxIndexRequest.url)

    http.post(postPageInfoRequest.url, null)
  })
}
