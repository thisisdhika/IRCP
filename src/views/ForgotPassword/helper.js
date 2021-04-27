import users from "../../mockData/users";

export const isEmailExist = (email) => {
  const user = users[email];
  if (!user || user.email !== email){
    return false;
  }
  return true;
}
