'use strict'

const { google } = require('googleapis');

const key = require('./ga-auth.json');
const scopes = 'https://www.googleapis.com/auth/analytics.readonly'
const jwt = new google.auth.JWT(key.client_email, null, key.private_key, scopes)
const view_id = process.env.GA_VIEW_ID;

process.env.GOOGLE_APPLICATION_CREDENTIALS = './ga-auth.json'

jwt.authorize((err, response) => {
  google.analytics('v3').data.ga.get(
    {
      auth: jwt,
      ids: 'ga:' + view_id,
      'start-date': '30daysAgo',
      'end-date': 'today',
      metrics: 'ga:pageviews'
    },
    (err, result) => {
      console.log(err, result)
    }
  )
})