import { group, check } from 'k6'
import http from 'k6/http'
import * as helper from '../tests/helper.js'
import { SharedArray} from "k6/data"

const userData = new SharedArray("Test User Data", function () {
  return JSON.parse(open('users.json')).users;
})

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
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<5000']
  }
}

export function reserved_login() {
  let randomUserScenario = helper.getRandomNumber()
  let randomUserNumber = helper.getRandomUser()

  console.log(randomUserScenario)
  let getCustomerAccountLoginPageRequest = {
    method: 'GET',
    url: 'https://www.reserved.com/gb/en/customer/account/login/',
    params: {
      tags: {
        name: 'RE - Get Customer Account Login Page'
      }
    }
  }

  let getVarnishAjaxNewIndexRequest = {
    method: 'GET',
    url: 'https://www.reserved.com/gb/en/varnish/ajax/newindex/?1728379786319',
    params: {
      tags: {
        name: 'RE - Get Varnish New Index'
      }
    }
  }

  let getVarnishAjaxIndexRequest = {
    method: 'GET',
    url: 'https://www.reserved.com/gb/en/varnish/ajax/index/?1728379786327',
    params: {
      tags: {
        name: 'RE - Get Varnish Index'
      }
    }
  }

  let postPageInfoRequest = {
    method: 'POST',
    url: 'https://www.reserved.com/proxydirectory/549238991762/pageInfo',
    params: {
      tags: {
        name: 'RE - Post Page Info'
      }
    }
  }

  function postCustomerLoginRequest(form_key) {
    return {
      method: 'POST',
      url: 'https://www.reserved.com/gb/en/ajx/customer/login/referer/aHR0cHM6Ly93d3cucmVzZXJ2ZWQuY29tL2diL2VuLw,,/uenc/aHR0cHM6Ly93d3cucmVzZXJ2ZWQuY29tL2diL2VuLw,,/?lpp_new_login',
      body: {
        'login[username]': userData[randomUserNumber].email,
        'login[password]': userData[randomUserNumber].password,
        'login[remember_me]': '1',
        form_key: form_key,
      },
      params: {
        headers: {
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        tags: {
          name: 'RE - Post Customer Login'
        }
      }
    }
  }

  let getMainPageRequest = {
    method: 'GET',
    url: 'https://www.reserved.com/gb/en/',
    params: {
      tags: {
        name: 'RE - Get Main Page'
      }
    }
  }

  let getCheckoutCartPageRequest = {
    method: 'GET',
    url: 'https://www.reserved.com/gb/en/checkout/cart/',
    params: {
      tags: {
        name: 'RE - Get Checkout Cart Page',
      },
    }
  }

  console.log("User Login Scenario")
  group('Login Page - https://www.reserved.com/gb/en/customer/account/login/#login', function () {
    let getCustomerAccountLoginPageResponse = http.get(getCustomerAccountLoginPageRequest.url, getCustomerAccountLoginPageRequest.params)
    check(getCustomerAccountLoginPageResponse, { "GET - Customer Account Login Page Status was 200": (r) => r.status === 200 })
    let formKey = helper.getFormKey(getCustomerAccountLoginPageResponse)

    let getVarnishAjaxNewIndexResponse = http.get(getVarnishAjaxNewIndexRequest.url, getVarnishAjaxNewIndexRequest.params)
    check(getVarnishAjaxNewIndexResponse, { "GET - Varnish New Index Status was 200": (r) => r.status === 200 })

    let getVarnishAjaxIndexResponse = http.get(getVarnishAjaxIndexRequest.url, getVarnishAjaxIndexRequest.params)
    check(getVarnishAjaxIndexResponse, { "GET - Varnish Index Status was 200": (r) => r.status === 200 })

    let postPageInfoResponse = http.post(postPageInfoRequest.url, null, postPageInfoRequest.params)
    check(postPageInfoResponse, { "POST - Page Info Status was 301": (r) => r.status === 301 })

    let postCustomerLoginResponse = http.post(postCustomerLoginRequest().url, postCustomerLoginRequest(formKey).body, postCustomerLoginRequest().params)
    check(postCustomerLoginResponse, { "POST - Customer Login Status was 200": (r) => r.status === 200 })
  })

  group('Main Page After User Log In - https://www.reserved.com/gb/en/', function () {
    let getMainPageResponse = http.get(getMainPageRequest.url, getMainPageRequest.params)
    check(getMainPageResponse, { "GET - Main Page Status was 200": (r) => r.status === 200 })

    let getVarnishAjaxNewIndexResponse = http.get(getVarnishAjaxNewIndexRequest.url, getVarnishAjaxNewIndexRequest.params)
    check(getVarnishAjaxNewIndexResponse, {
      "GET - Varnish New Index Status was 200": (r) => r.status === 200,
      "User has been logged in succesfully": (r) => r.body.includes(userData[randomUserNumber].firstName) === true
    })

    let getVarnishAjaxIndexResponse = http.get(getVarnishAjaxIndexRequest.url, getVarnishAjaxIndexRequest.params)
    check(getVarnishAjaxIndexResponse, {
      "GET - Varnish Index Status was 200": (r) => r.status === 200,
      "User has been logged in succesfully": (r) => r.body.includes(userData[randomUserNumber].firstName) === true
    })

    let postPageInfoResponse = http.post(postPageInfoRequest.url, null, postPageInfoRequest.params)
    check(postPageInfoResponse, { "GET - Page Info Status was 301": (r) => r.status === 301 })

    if (randomUserScenario <= 19.00) {
      console.log("Checkout Cart Visit Scenario")
      group("Checkout Cart Page - https://www.reserved.com/gb/en/checkout/cart/", function () {
        let getCheckoutCartPageResponse = http.get(getCheckoutCartPageRequest.url, getCheckoutCartPageRequest.params);
        check(getCheckoutCartPageResponse, { 'GET - Checkout Cart Page status was 200': (r) => r.status == 200 });

        let getVarnishAjaxNewIndexResponse = http.get(getVarnishAjaxNewIndexRequest.url, getVarnishAjaxNewIndexRequest.params)
        check(getVarnishAjaxNewIndexResponse, { 'GET - Varnish New Index status was 200': (r) => r.status == 200 });

        let getVarnishAjaxIndexResponse = http.get(getVarnishAjaxIndexRequest.url, getVarnishAjaxIndexRequest.params)
        check(getVarnishAjaxIndexResponse, { 'GET - Varnish Index status was 200': (r) => r.status == 200 });
      });
    }

  })
}
