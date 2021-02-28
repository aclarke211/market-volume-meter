function getDateUTC() {
  return new Date().toUTCString();
}

function toUTCDate(date) {
  return new Date(date).toUTCString();
}

function getLocalDate(utcString, ampm = true) {
  if (utcString) {
    return new Date(utcString).toLocaleString(ampm ? 'en-US' : 'en-GB', Intl.DateTimeFormat().resolvedOptions().timeZone);
  }
  return new Date().toLocaleString(ampm ? 'en-US' : 'en-GB', Intl.DateTimeFormat().resolvedOptions().timeZone);
}

function getTimezoneDate(location = 'America/Los_Angeles', ampm = true) {
  return new Date().toLocaleString(ampm ? 'en-US' : 'en-GB', { timeZone: location });
}

module.exports = {
  getDateUTC,
  toUTCDate,
  getLocalDate,
  getTimezoneDate,
};
