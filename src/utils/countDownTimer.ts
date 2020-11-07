export const countDownTimer = (end: string) => {
  const endArr = end.split(":");
  const endHour = endArr[0];
  const endMinute = endArr[1];

  const endTime = new Date();
  endTime.setHours(parseInt(endHour));
  endTime.setMinutes(parseInt(endMinute));
  endTime.setSeconds(0o0);

  let distance = endTime.getTime() - new Date().getTime();

  // Hour
  let scheduleHours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  // Minutes
  let scheduleMinutes =
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + 1;
  // `${scheduleHours < 10 ? "0" + scheduleHours : scheduleHours}:${
  //   scheduleMinutes < 10 ? "0" + scheduleMinutes : scheduleMinutes
  // }`

  return `${scheduleMinutes} min`;
};
