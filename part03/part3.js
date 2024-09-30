import http from 'k6/http';

export const options = {
  stages: [
    { duration: '30s', target: 5 },
    { duration: '30s', target: 5 },
    { duration: '30s', target: 0 },
  ],
};

export default function () {
  http.get('https://reserved.com/gb/en');
}