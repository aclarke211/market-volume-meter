function getDateUTC() {
  return new Date().toUTCString();
}

function toUTCDate(date) {
  return new Date(date).toUTCString();
}

function getLocalDate(utcString) {
  if (utcString) {
    return new Date(utcString).toLocaleString('en-US', Intl.DateTimeFormat().resolvedOptions().timeZone);
  }
  return new Date().toLocaleString('en-US', Intl.DateTimeFormat().resolvedOptions().timeZone);
}

function getTimezoneDate(location = 'America/Los_Angeles') {
  return new Date().toLocaleString('en-US', { timeZone: location });
}

module.exports = {
  getDateUTC,
  toUTCDate,
  getLocalDate,
  getTimezoneDate,
};
