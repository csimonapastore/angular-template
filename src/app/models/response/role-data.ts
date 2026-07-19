export interface RoleData {
    guid: string;
    name: string;
    active: boolean;
    creationTime: string;
    updateTime: string;
    deletionTime?: string;
}

export interface RoleDataResponse {
  data: RoleData;
}