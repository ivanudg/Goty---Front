export interface Game {
    name: string;
    url: string;
    id: string;
    votos: number;
}

export interface RespHttp {
    ok: boolean;
    mensaje: string;
}