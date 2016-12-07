'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}

var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN;
console.log(FB_PAGE_TOKEN)
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'just_do_it'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}

//heroku config:set FB_PAGE_TOKEN='EAAZAwQbY0G9IBAMr1IoPf3T4QlAtEgjKrqm7lR1t75iAhBc8NAbQ9xaMgNgdSeDIRRF0tXwOg4k6u6RR76ZCZCZBbJLhJbUmhZAVY2DjtvDPRTciHQq7tUqw8ZAMEids4PoZB0bJ3dsuOXgWhl64qyZBQZBuY3PHZCpaJQvZBez5XMqvVtbtN0aDH7q'
