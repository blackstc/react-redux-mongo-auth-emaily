const bunyan = require('bunyan');

const log = bunyan.createLogger({
  name: 'emaily',
  level: 'info',
  src: true,
  serializers: {
    req: reqSerializer,
    emaily_error
  }
});

function reqSerializer(req) {
  return {
    headers: req.headers,
    method: req.method,
    url: req.url,
    body: req.body
  };
}

function emaily_error({ message, statusCode, error }) {
  return {
    message: message || 'No message provided',
    statusCode: statusCode || 'No Status Code',
    error: error || 'No error provided'
  };
}

if (process.env.DEBUG === 'on') {
  log.level('debug');
}

module.exports = log;
