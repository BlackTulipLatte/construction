const myHeaders = new Headers();
myHeaders.append("apikey", "elDk1sTh5N2Ig6eRsprNKY0oV5q7dGLX");

export const getCity = async (city) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const data = fetch(`https://api.apilayer.com/geo/city/name/${city}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  return data;
};
