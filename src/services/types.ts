export interface PostSolicitation {
  keyword: string;
}

export interface PostSolicitationResp {
  id: string;
}

export interface GetSolicitationResp {
  id: string;
  status: string;
  urls: string[];
}
