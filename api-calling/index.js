let getRandomUser = async () => {
  let response = await fetch("https://randomuser.me/api/", {
    method: "GET",
  });
  return await response.json();
};

export default getRandomUser;
