import { AvMicroserviceApi } from '@availity/api-axios';

const UserService = new AvMicroserviceApi({
  url: 'http://localhost:8080/User',
});

const createUserService = new AvMicroserviceApi({
  url: 'http://localhost:8080/createUser',
});

export const getUsers = async () => {
  let response;
  try {
    response = await UserService.get();
  } catch (error) {
    console.log(error);
  }
  console.log(response);
};

export const getUserByUsername = async username => {
  let response;
  const config = { name: username };
  try {
    response = await UserService.query({ config });
  } catch (error) {
    console.log(error);
  }

  console.log(response);

  return response;
};

export const createUser = async user => {
  let response;
  try {
    createUserService.post(user); // assuming user is correct shape
  } catch (error) {
    console.log(error);
  }
  console.log(response);
};

export const updateUser = async (user, username) => {
  let response;
  try {
    UserService.put(username, user); // assuming user is correct shape
  } catch (error) {
    console.log(error);
  }
  console.log(response);
};

export default UserService;

// Questions:
// is using a config const the correct way to pass query params?
// is it ok that I have two AvMicroserviceApis?
// how to call service from form?
// console log?
