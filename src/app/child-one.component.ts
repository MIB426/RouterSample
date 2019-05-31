import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit, OnDestroy {
  private sub: any;
  parentRouteId: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => { this.parentRouteId = +params["id"]; });


  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
