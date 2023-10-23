export const getFormatTimeRemaining = (seconds) => {
  const ss = Math.floor(seconds % 60);
  const mm = Math.floor((seconds / 60) % 60);
  const hh = Math.floor((seconds / (60 * 60)) % 24);
  const dd = Math.floor(seconds / (60 * 60 * 24));

  const s_ss = ss < 10 ? `0${ss}` : ss;
  const s_mm = mm < 10 ? `0${mm}` : mm;
  const s_hh = hh < 10 ? `0${hh}` : hh;

  if (dd > 0) {
    return `${dd} days`;
  } else if (s_hh > 0) {
    return `${s_hh}:${s_mm}:${s_ss}`;
  } else if (s_mm > 0) {
    return `${s_mm}:${s_ss}`;
  }

  return `${ss} seconds`;
};

export const getTimeRemaining = (endtime) => {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
};

export function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}

export const generateReferralCode = () => {
  // return new Date().getUTCMilliseconds();
  return `${new Date().valueOf()}`;
}