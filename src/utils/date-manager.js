function getDateUTC() {
  return new Date().toUTCString();
}

function toUTCDate(date) {
  return new Date(date).toUTCString();
}

function getLocalDate(utcString) {
  if (utcString) {
    return new Date(utcString);
  }
  return new Date();
}

module.exports = {
  getDateUTC,
  toUTCDate,
  getLocalDate,
};
