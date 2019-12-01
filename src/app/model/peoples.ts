export interface Peoples {
    count: string;
    name: string;
    results: Array<string>;
    previous?: string;
    next?: string;
    birth_year?: string;
    created?: string;
    edited?: string;
    eye_color?: string;
    gender?: string;
    hair_color?: string;
    height?: string;
    mass?: string;
    skin_color?: string;

  }
  export interface Peoples extends Array<Peoples>{}