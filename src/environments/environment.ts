// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDPvhUsplQJyEyT-VyTixyYQgGX9D9FCGM',
    authDomain: 'shop-chart.firebaseapp.com',
    databaseURL: 'https://shop-chart.firebaseio.com',
    projectId: 'shop-chart',
    storageBucket: 'shop-chart.appspot.com',
    messagingSenderId: '347601830656'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
