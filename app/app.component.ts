/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, Observable } from "rxjs/Rx";

@Component({
  selector: "my-app",
  styleUrls: ["app.component.css"],
  templateUrl: "app.component.html"
})
export class AppComponent {
  public options: string[] = this._getOptions(50);
  public selectedOptions: string[] = [];
  private _getOptions(numOptions: number): string[] {
    let returnArray: string[] = [];
    for (let x: number = 0; x < numOptions; x++) {
      returnArray.push("Option" + x);
    }
    return returnArray;
  }
  public select(selectedVal: string): void {
    this.selectedOptions.push(selectedVal);
  }
  public deselect(selectedVal: string): void {
    this.selectedOptions = this.selectedOptions.filter(
      (option: string) => option !== selectedVal
    );
  }

  public get availableOptions(): string[] {
    return this.options.filter((option: string) => this.selectedOptions.indexOf(option) === -1);
  }
}
