#### firebase server functions


```javascript
const axios = require('axios');
let data = JSON.stringify({
  "registration_ids": [
    "dvqv97NEqv5eyCrlZK06Ue:APA91bEyLAEec6mPMmxXsnv46poIhWckqHd_6IvR1zfDRTmBfMHVbuYn1S_1vkfYLhdkURQnofR_boRUh7Wnfij7qeV93nJsNSlRd8CivT6SJzEfJfhvP6L5vAIZToTgQbxl5F4LV79m"
  ],
  "notification": {
    "title": "REVOLT Summit",
    "body": "your_message_here",
    "vibrate": 1,
    "sound": 1,
    "priority": "high",
    "content_available": true
  }
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://fcm.googleapis.com/fcm/send',
  headers: { 
    'Authorization': 'key=AAAA9E9hMlg:APA91bGL_3G6M58Gwt7FB2PrQwcOgnvizmCggdDdnHpwTpZMv4JHmsLCDVmsRG63-OJo1NYBkeDvZDO_3TO4ut5Lfj067VzOTkVQ4kPuEsbNrwItcXTaYpTYcl4Rycm8wC-Ai7nG1sT5', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

```