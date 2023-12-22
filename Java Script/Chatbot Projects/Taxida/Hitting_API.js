const axios = require('axios');

const apiUrl = 'https://cloud.yellow.ai/cdp/api/v1/event?bot=x1691052818017';
const apiKey = 'Y681-bKkjCn1Bs1r22wvoCdLGAYJzCUP8iNez_51';

const requestData = {
  userId: '918074212400',
  eventName: 'wa_1_custom_event',
  source: 'yellowmessenger',
  payload: {
    Patient_Name: 'Eswar Sai',
    Link: '12-12-2023',
    phone: '918074212400'
  }
};

const headers = {
  'Content-Type': 'application/json',
  'X-Api-Key': apiKey
};

axios.post(apiUrl, requestData, { headers })
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
