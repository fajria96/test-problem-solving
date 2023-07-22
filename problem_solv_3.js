function countTimeConversion(s) {
  const timeArr = s.slice(0, 8).split(":");
  const meridiem = s.slice(-2);

  let hour = parseInt(timeArr[0], 10);

  if (meridiem === "PM" && hour !== 12) {
    hour += 12;
  }
  if (meridiem === "AM" && hour === 12) {
    hour = 0;
  }

  const formattedHour = hour.toString().padStart(2, "0");
  const formattedMinute = timeArr[1].padStart(2, "0");
  const formattedSecond = timeArr[2].padStart(2, "0");

  const militaryTime = `${formattedHour}:${formattedMinute}:${formattedSecond}`;
  return militaryTime;
}

const exampleInput = "08:09:50PM";

console.log(countTimeConversion(exampleInput)); 

