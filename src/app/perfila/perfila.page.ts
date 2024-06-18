import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-perfila',
  templateUrl: './perfila.page.html',
  styleUrls: ['./perfila.page.scss'],
})
export class PerfilaPage implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
