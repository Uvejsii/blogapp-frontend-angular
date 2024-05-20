export interface AccounCreate {
  username: string;
  password: string;
  email: string;
  fullname?: string;
}

export interface AccounLogin {
  username: string;
  password: string;
}

export interface AccounProfile {
  applicationUserId: number;
  username: string;
  fullname: string;
  email: string;
  token: string;
}
