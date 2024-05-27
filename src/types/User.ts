// src/types/User.ts
export interface User {
    id: number;
    name: string;
    email: string;
    roles: Role[];
  }
  
  export interface Role {
    id: number;
    name: string;
    permissions: Permission[];
  }
  
  export interface Permission {
    id: number;
    name: string;
  }
  