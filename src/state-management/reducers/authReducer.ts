interface LogoutAction {
  type: "LOGOUT";
}
interface LoginAction {
  type: "LOGIN";
  username: string;
}

const authReducer = (
  state: string,
  action: LoginAction | LogoutAction
): string => {
  switch (action.type) {
    case "LOGIN":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
};
export default authReducer;
