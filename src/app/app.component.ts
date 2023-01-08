import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CdkDragEnd, CdkDragEnter} from "@angular/cdk/drag-drop";
import {map, Observable} from "rxjs";

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  pionPositionJoueur1 = {};
  pionPositionJoueur2 = {};

  formFirstPlayer = this.fb.group({
    x: ['', [Validators.required, Validators.maxLength(1), Validators.minLength(1), Validators.pattern(/^[0-9]\d*$/)]],
    y: ['', [Validators.required]],
    p: ['', [Validators.required]]
  });

  formSecondPlayer = this.fb.group({
    x: ['', [Validators.required, Validators.maxLength(1), Validators.minLength(1), Validators.pattern(/^[0-9]\d*$/)]],
    y: ['', [Validators.required]],
    p: ['', [Validators.required]]
  });

  title = ''

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    console.log($('.rond').find())
    console.log('test jenkins build***********')
    this.translate("aa")
  }

  submitPlayer1() {
    let x = this.formFirstPlayer.value.x;
    let y = this.formFirstPlayer.value.y;
    let p = this.formFirstPlayer.value.p;
    console.log(x, y, p);
    if (this.isAllEntryValid(<number><unknown>x, <number><unknown>y, <number><unknown>p)) {
      const classStyle = "rond" + p;
      const idPion = "#p" + p + "j1";
      if ($(idPion).length > 0)
        $(idPion).remove();
      const idCell = "#cell-" + x + y;
      if ($(idCell + " " + "p").text().includes('pion')) $(idCell + " " + "p").remove();
      let child = "<p class='rond' title='" + 'pion' + p + "'>" + 'pion' + p + "<br>" + x + ',' + y + "</p>"
      $(idCell).addClass("rond");
      $(idCell).append(child);
      // @ts-ignore
      this.pionPositionJoueur1["pion" + p] = {x: x, y: y}
      console.log(this.pionPositionJoueur1);
      this.formFirstPlayer.reset();
    }
  }

  isAllEntryValid(x: number, y: number, p: number): boolean {
    return (x < 3 && x >= 0) && (y < 3 && y >= 0) && (p > 0 && p < 4);
  }

  isMovePion(x: number, y: number, p: number, player: number): boolean {

    return false;
  }

  isWinner(): boolean {
    return false;
  }

  submitPlayer2() {

  }

  drop(data: any) {
    console.log("**************** drop");
    console.log(data);
  }

  drag(data: CdkDragEnd) {
    console.log("****************** drag")
    console.log(data)
  }

  ented(data: CdkDragEnter<any>) {
    console.log("***************** ented");
    console.log(data);
  }

  translate(text: string) {
    let str = '';
    let regex = 'aeiou';
    let arr = text.split('');

    for (let elt of arr) {
      if (regex.includes(elt)) {
        console.log(arr[arr.indexOf(elt) - 1])
        if (!regex.includes(arr[arr.indexOf(elt) - 1]) && arr[arr.indexOf(elt) - 1] != undefined || arr[arr.indexOf(elt) - 1] == undefined) {
          str += "av"
          str += elt
        } else {
          str += elt
        }
      } else {
        str += elt
      }
    }
    console.log("************************* result")
    console.log(str)
  }
}


