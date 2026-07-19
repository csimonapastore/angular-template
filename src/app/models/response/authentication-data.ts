import { RoleData } from "./role-data";

export interface AuthenticatedUser {
    guid: string;
    email: string;
    password: string;
    name: string;
    surname: string;
    username: string;
    token: string;
    refreshToken: string;
    role: RoleData;
}

export interface AuthenticationDataResponse {
  data: AuthenticatedUser;
}