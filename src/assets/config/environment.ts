import { AuthenticationDataRequest } from "../../app/models/request/authentication-data";
import { AuthenticationDataResponse } from "../../app/models/response/authentication-data";
import USERS from './mock-data/users';

export interface AppEnvironment {
	production: boolean;
	isMockEnabled: boolean;
	apiUrl?: string;
	name?: string;
	version?: string;
	features?: Record<string, boolean>;
	mockData?: {
        authenticationData?: {
            users?: Array<{
                request?: AuthenticationDataRequest;
                response?: AuthenticationDataResponse;
            }>;
        };
    };
}

export const environment: AppEnvironment = {
	production: false,
	// Toggle this to enable/disable mocked behaviour in services
	isMockEnabled: true,
	// Default local API base - change for your backend
	apiUrl: 'http://localhost:3000/api',
	name: 'angular-template',
	version: '0.0.0',
	features: {
		// Example feature toggles
		enableNewLogin: false
	},
    mockData: {
        // Use centralized USERS so roles and users are defined in one place
        authenticationData: {
            users: USERS
        }

    }
};