import ROLES from './roles';

// USERS exported in the same shape used by environment.mockData.authenticationData.users
export const USERS = [
  {
    request: {
      data: {
        email: 'admin@email.it',
        password: 'admin123'
      }
    },
    response: {
      data: {
        guid: 'user-guid',
        email: 'admin@email.it',
        password: 'admin123',
        name: 'Admin',
        surname: 'User',
        username: 'admin',
        token: 'mocked-token',
        refreshToken: 'mocked-refresh-token',
        role: ROLES.Admin
      }
    }
  }
];

export default USERS;
