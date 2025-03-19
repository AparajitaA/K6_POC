import http from 'k6/http';
import { check, sleep } from 'k6';

//Define the test configuration
export const options = {
   vus: 10, //Number of virtual users
   duration: '30s', //Test duration
};

//Main test function 
export default function () {

    //Define the target URL
    const url = 'http://test.k6.io';

    //Send an HTTP GET request
    const res = http.get(url);

    //Check if the response status is 200
    check(res, {
        'is status 200' : (r) => r.status === 200,
    })

    sleep(1);
}

