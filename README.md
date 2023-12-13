# basics

-- Angular:

- File structure:
https://angular.io/guide/file-structure

All projects within a workspace share a CLI configuration context. The top level of the workspace contains workspace-wide configuration files, configuration files for the root-level application, and subfolders for the root-level application source and test files.

By default, the CLI command ng new my-app creates a workspace folder named "my-app" and generates a new application skeleton in a src/ folder at the top level of the workspace. A newly generated application contains source files for a root module, with a root component and template.

Inside the src folder, the app folder contains your project's logic and data. Angular components, templates, and styles go here.

- Typescript config:
https://angular.io/guide/typescript-configuration

TypeScript is a primary language for Angular application development. It is a superset of JavaScript with design-time support for type safety and tooling.

Browsers can't execute TypeScript directly. Typescript must be "transpiled" into JavaScript using the tsc compiler, which requires some configuration.

A given Angular workspace contains several TypeScript configuration files. At the root tsconfig.json file specifies the base TypeScript and Angular compiler options that all projects in the workspace inherit.

Many JavaScript libraries, such as jQuery, the Jasmine testing library, and Angular, extend the JavaScript environment with features and syntax that the TypeScript compiler doesn't recognize natively. When the compiler doesn't recognize something, it reports an error.

Use TypeScript type definition files —d.ts files— to tell the compiler about the libraries you load.

- Change detection:
https://angular.io/guide/change-detection

Change detection is the process through which Angular checks to see whether your application state has changed, and if any DOM needs to be updated. At a high level, Angular walks your components from top to bottom, looking for changes. Angular runs its change detection mechanism periodically so that changes to the data model are reflected in an application’s view. Change detection can be triggered either manually or through an asynchronous event (for example, a user interaction or an XMLHttpRequest completion).

Third-party libraries commonly trigger unnecessary change detection cycles because they weren't authored with Zone.js in mind. Avoid these extra cycles by calling library APIs outside the Angular zone:

import { Component, NgZone, OnInit } from '@angular/core';
@Component(...)
class AppComponent implements OnInit {
  constructor(private ngZone: NgZone) {}
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => setInterval(pollForUpdates), 500);
  }
}

- DS and Algo:
https://www.geeksforgeeks.org/learn-data-structures-with-javascript-dsa-tutorial/

A data structure is defined as a particular way of storing and organizing data in our devices to use the data efficiently and effectively. The main idea behind using data structures is to minimize the time and space complexities. An efficient data structure takes minimum memory space and requires minimum time to execute the data.

Learn about Complexities:
Here comes one of the interesting and important topics. The primary motive to use DSA is to solve a problem effectively and efficiently. How can you decide if a program written by you is efficient or not? This is measured by complexities. Complexity is of two types:

Time Complexity: Time complexity is used to measure the amount of time required to execute the code.

Space Complexity: Space complexity means the amount of space required to execute successfully the functionalities of the code. 
You will also come across the term Auxiliary Space very commonly in DSA, which refers to the extra space used in the program other than the input data structure.