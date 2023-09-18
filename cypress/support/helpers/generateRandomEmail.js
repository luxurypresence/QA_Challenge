import generateRandomNumber from './generateRandomNumber';

export default function generateRandomEmail(email) {
  return email.substr(0, 4) + `+${generateRandomNumber(6)}` + email.substr(4);
}
