const HoursTreatment = (hour: any) => {
  if (hour !== "") {
    return hour.toString().match(/.{2}/g).join(":");
  }
  return null;
};

export default HoursTreatment;
