// npm install @ionic-native/secure-storage-echo
// import { Injectable } from "@angular/core";
// import { SecureStorageEcho, SecureStorageEchoObject } from '@ionic-native/secure-storage-echo/ngx'

// @Injectable()
// export class StorageService{
//     private secureObject:SecureStorageEchoObject;
//     constructor(private ss: SecureStorageEcho){
//       this.ss.create('secureStorage')
//       .then( (secureStorageObject:SecureStorageEchoObject) => this.secureObject = secureStorageObject);
//     }

//     set(key:string, value:string)
//     {
//       return this.secureObject.set(key, value);
//     }

//     get(key:string){
//       return this.secureObject.get(key);
//     }
// }