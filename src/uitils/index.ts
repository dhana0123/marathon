export const getDate = () => {
  let today = new Date();
  let year = today.getFullYear();
  let month = String(today.getMonth() + 1).padStart(2, "0"); // January is 0
  let day = String(today.getDate()).padStart(2, "0");
  let dateString = year + "-" + month + "-" + day;
  return dateString;
};

export const truncate = (str: string, length: number) => {
  if (str.length > length) {
    return str.substring(0, length - 3) + "...";
  } else {
    return str;
  }
};
