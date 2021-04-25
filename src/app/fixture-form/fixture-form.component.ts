import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'pm-fixture-form',
  templateUrl: './fixture-form.component.html',
  styleUrls: ['./fixture-form.component.css']
})
export class FixtureFormComponent implements OnInit {


  SERVER_URL = "https://localhost:5001/Fixtures/getSpecificFixtures";
  uploadForm!: FormGroup;
  json:any;


  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  onSubmit(data: any) {
    var fixture = {
      leagueId:parseInt(data.league),
      date:new Date(data.date)};

    return this.httpClient.post<any>(this.SERVER_URL, fixture,
      ).toPromise().then(data=>{
        console.log(data);
      this.json =data;
    })
  }

}
