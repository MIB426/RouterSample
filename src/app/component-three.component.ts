import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.css']
})
export class ComponentThreeComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
