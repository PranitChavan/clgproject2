function getTimeRemaining(endtime) {
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
}

function initializeClock(id, endtime) {
  const timeinterval = setInterval(updateClock, 1000);
  function updateClock() {
    const t = getTimeRemaining(endtime);

    const msg = 'Doom';
    const color = 'red';

    console.log(
      ` %c ${msg}: Days:${t.days} Hours:${t.hours} Min:${t.minutes} Sec:${t.seconds} `,
      `color : ${color}; font-family:${'monospace'}; font-size: ${'20px'}`
    );

    if (t.total <= 0) {
      clearInterval(timeinterval);
      console.log('THE DAY HAS FINALLY ARRIVED');
    }
  }

  updateClock();
}

const deadline = new Date(Date.parse(new Date('June 20 , 2024 00:00:00')));

initializeClock('clockdiv', deadline);
