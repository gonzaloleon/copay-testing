import { Injectable } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
// Providers

export enum TouchIdErrors {
  fingerprintCancelled = 'FINGERPRINT_CANCELLED'
}
@Injectable()
export class TouchIdProvider {
  public iosBiometricMethod: string;
  constructor(
    private faio: FingerprintAIO
  ) {}
  public isAvailable(): Promise<any> {
    return this.faio
      .isAvailable()
      .then(val => {
        this.iosBiometricMethod = val;
        return Promise.resolve(true);
      })
      .catch(e => {
        return Promise.resolve(false);
      });
  }
  public check(): Promise<any> {
    return this.faio
      .show({
        clientId: 'this.app.info.name'
      })
      .then((result: any) => {
      })
      .catch((e: any) => {
        throw e;
      });
  }
  
}