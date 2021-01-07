import { AvMicroserviceApi } from '@availity/api-axios';

const ClosetService = new AvMicroserviceApi({
  url: 'http://localhost:8080/Closet',
});

export const getUserCloset = async username => {
  let response;

  const config = { name: `/${username}?sortField=model&sortDir=desc` };

  try {
    response = await ClosetService.get(config);
  } catch (error) {
    console.log(error);
  }
  console.log(response);
};

export const postUserCloset = async userClosetData => {
  let response;

  try {
    response = await ClosetService.post(userClosetData); // assumes format is correct
  } catch (error) {
    console.log(error);
  }
  console.log(response);
};

export default ClosetService;

// Questions:
// is using a config const the correct way to pass query params?
// how to call service from form?
// console log?
