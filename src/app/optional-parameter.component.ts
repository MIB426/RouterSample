import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-optional-parameter',
  templateUrl: './optional-parameter.component.html',
  styleUrls: ['./optional-parameter.component.css']
})
export class OptionalParameterComponent implements OnInit, OnDestroy {
  private sub: any;
  page: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.page = +params['page'] || 0;

      console.log('Query param page: ', this.page);
    });

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  nextPage() {
    this.router.navigate(['/optional-parameter'], { queryParams: { page: this.page + 1 } });
  }

}
