import { group, check } from 'k6'
import http from 'k6/http'
import * as helper from './helper-12.js';

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
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<5000'],
  },
}

export function reservedLogin() {
  let getCustomerAccountLoginPageRequest = {
    method: 'GET',
    url: 'https://www.reserved.com/gb/en/customer/account/login/',
    params: {
      tags: {
        name: 'RE - Get Customer Account Login Page',
      },
    },
  }

  let getVarnishAjaxNewIndexRequest = {
    method: 'GET',
    url: 'https://www.reserved.com/gb/en/varnish/ajax/newindex/?1726864558415',
    params: {
      tags: {
        name: 'RE - Get Varnish New Indes',
      },
    },
  }

  let getVarnishAjaxIndexRequest = {
    method: 'GET',
    url: 'https://www.reserved.com/gb/en/varnish/ajax/index/?1726864558424',
    params: {
      tags: {
        name: 'RE - Get Varnish Index',
      },
    },
  }

  let postPageInfoRequest = {
    method: 'POST',
    url: 'https://www.reserved.com/gb/en/varnish/ajax/index/?1726864558424',
    params: {
      tags: {
        name: 'RE - Post Page Info',
      },
    },
  }

  function postCustomerLoginRequest(form_key) {
    return {
      method: 'POST',
      url: 'https://www.reserved.com/gb/en/ajx/customer/login/referer/aHR0cHM6Ly93d3cucmVzZXJ2ZWQuY29tL2diL2VuLw,,/uenc/aHR0cHM6Ly93d3cucmVzZXJ2ZWQuY29tL2diL2VuLw,,/?lpp_new_login',
      body: {
        'login[username]': 'performancetests0001@wp.pl',
        'login[password]': 'Qweasd12@',
        'login[remember_me]': '1',
        'form_key': form_key
      },
      params: {
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        tags: {
          name: 'RE - Post Customer Login',
        },
      }
    };
  }

  let getMainPageRequest = {
    method: 'GET',
    url: 'https://www.reserved.com/gb/en/',
    params: {
      tags: {
        name: 'RE - Get Main Page',
      },
    }
  }

  group('Login Page - https://www.reserved.com/gb/en/customer/account/login/#login', function () {
    let getCustomerAccountLoginPageResponse = http.get(getCustomerAccountLoginPageRequest.url, getCustomerAccountLoginPageRequest.params);
    check(getCustomerAccountLoginPageResponse, { 'GET - Customer Account Login Page status was 200': (r) => r.status == 200 });
    let formKey = helper.getFormKey(getCustomerAccountLoginPageResponse)

    let getVarnishAjaxNewIndexResponse = http.get(getVarnishAjaxNewIndexRequest.url, getVarnishAjaxNewIndexRequest.params)
    check(getVarnishAjaxNewIndexResponse, { 'GET - Varnish New Index status was 200': (r) => r.status == 200 });

    let getVarnishAjaxIndexResponse = http.get(getVarnishAjaxIndexRequest.url, getVarnishAjaxIndexRequest.params)
    check(getVarnishAjaxIndexResponse, { 'GET - Varnish Index status was 200': (r) => r.status == 200 });

    let postPageInfoResponse = http.post(postPageInfoRequest.url, null, postPageInfoRequest.params)
    check(postPageInfoResponse, { 'POST - Page Info status was 200': (r) => r.status == 200 });

    let postCustomerLoginResponse = http.post(postCustomerLoginRequest().url, postCustomerLoginRequest(formKey).body, postCustomerLoginRequest().params)
    check(postCustomerLoginResponse, { 'POST - Customer Login status was 200': (r) => r.status == 200 });
  })

  group('Main Page After User Log In - https://www.reserved.com/gb/en/', function () {
    let getMainPageResponse = http.get(getMainPageRequest.url, getMainPageRequest.params);
    check(getMainPageResponse, { 'GET - Main Page status was 200': (r) => r.status == 200 });

    let getVarnishAjaxNewIndexResponse = http.get(getVarnishAjaxNewIndexRequest.url, getVarnishAjaxNewIndexRequest.params)
    check(getVarnishAjaxNewIndexResponse, {
      'GET - Varnish New Index status was 200': (r) => r.status == 200,
      'User has been logged in successfully': (r) => r.body.includes('Tomasz') == true
    });

    let getVarnishAjaxIndexResponse = http.get(getVarnishAjaxIndexRequest.url, getVarnishAjaxIndexRequest.params)
    check(getVarnishAjaxIndexResponse, {
      'GET - Varnish Index status was 200': (r) => r.status == 200,
      'User has been logged in successfully': (r) => r.body.includes('Tomasz') == true
    });

    let postPageInfoResponse = http.post(postPageInfoRequest.url, null, postPageInfoRequest.params)
    check(postPageInfoResponse, { 'POST - Page Info status was 200': (r) => r.status == 200 });
  })
}
