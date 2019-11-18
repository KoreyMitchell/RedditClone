import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() { $("#form").toggle(); }

  toggleClassUser() {
    $("#userinfo").toggle();
    $("#form").toggle();
  }

  toggleClassPost() {
    $("#form").toggle();
    $("#userinfo").toggle();
  }
  
  addPost(){
    // alert("Yes");
    // alert($('#postinput').val());
    $('#results').append('<div style="width: 50vw; margin-left:auto; margin-right:auto; border: 2px solid red; border-radius: 5px; margin-top: 10px;">'+ $('#postinput').val());


    // $('#results').append(
    //   $('<div>', {
    //     type: 'text',
    //     val: $('#postinput').text()
    //   })
    // );
  }

}


