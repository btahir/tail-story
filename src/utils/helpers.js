export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const firestoreTimeStampConvert = (timestamp) => {
  let d = new Date(parseInt(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000))
  return `${(d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear()}`
}
