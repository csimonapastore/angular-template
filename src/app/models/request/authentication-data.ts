export interface AuthenticationData {
  email: string;
  password: string;
}

export interface AuthenticationDataRequest {
  data: AuthenticationData;
}