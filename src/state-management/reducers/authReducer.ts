interface LogoutAction {
  type: "LOGOUT";
}
interface LoginAction {
  type: "LOGIN";
  username: string;
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (state: string, action: AuthAction): string => {
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
