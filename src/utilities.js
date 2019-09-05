export const logger = ({ logging = true }) => {
  const formatDate = (date = Date.now()) => {
    const now = new Date(date);
    const day = /(.*?)\s/.exec(now)[1];
    const month = /.*?\s(.*)\s/.exec(now)[1];
    const dayNumber = /.*?\s.*?\s(.*?)\s/.exec(now)[1];
    const time = /.*?\s.*?\s.*?\s.*?\s(.*?)\s/.exec(now)[1];
    const timeZone = /.*?\s.*?\s.*?\s.*?\s.*?\s(.*?)\s/.exec(now)[1];
    return `[${time}]`;
  };
  return {
    loggingOn: () => (logging = true),
    loggingOff: () => (logging = false),
    log: (...msgs) => {
      if (logging) {
        console.log.apply(null, [`${formatDate()}: `, ...msgs]);
      }
    },
    info: ([...msgs]) => {},
    warn: ([...msgs]) => {},
    error: ([...msgs]) => {}
  };
};
