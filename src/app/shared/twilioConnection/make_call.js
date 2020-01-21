// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

// import { environment } from '../../../environments/environment.prod';
// import { Twilio } from 'twilio';

const accountSid = 'ACffe917c3006cf33797d3dcab3c58ea48';
const authToken = 'c37979dacc046cbbca88a22693a3d8c6';
const client = require('twilio')(accountSid, authToken);

export const call = () => {
    // const client = new Twilio(accountSid, authToken);
    client.calls
        .create({
            url: 'http://demo.twilio.com/docs/voice.xml',
            to: '+919538346231',  // client number
            from: '+16173338943'  // Our Number
        })
        .then(call => console.log(call.sid));
};


// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
// const accountSid = 'ACffe917c3006cf33797d3dcab3c58ea48';
// const authToken = 'c37979dacc046cbbca88a22693a3d8c6';
// const client = require('twilio')(accountSid, authToken);

// client.calls
//     .create({
//         url: 'http://demo.twilio.com/docs/voice.xml',
//         to: '+919538346231',
//         from: '+16173338943'
//     })
//     .then(call => console.log(call.sid));
