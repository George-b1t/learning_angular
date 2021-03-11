import { Injectable } from '@angular/core';

interface UserInfo {
  id: number;
  name: string;
  old: number;
}

@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {

  constructor() { }

  getFuncionarios(): Array<UserInfo> {
    return [
      {id: 1, name: 'George', old: 17},
      {id: 2, name: 'Pedro', old: 20},
      {id: 3, name: 'Marcos', old: 39},
    ];
  }
}
