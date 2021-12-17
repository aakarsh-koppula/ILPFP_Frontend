import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLoggedIn: Boolean;
  public filterName: String;

  constructor(private router: Router) 
  { 
    this.filterName = "";
    
    // enable search only on the home page
    if (this.router.url === "/")
    {
      this.isLoggedIn = false;
    }
    else if (this.router.url.includes("home"))
    {
      this.isLoggedIn = true;
    }
    else
    {
      this.isLoggedIn = false;
    }
    console.log(this.router.url);
  }

  ngOnInit(): void 
  {
    this.urlChanged();
  }

  public urlChanged()
  {
    this.router.events.subscribe( (event) => {
      if (event instanceof NavigationEnd) 
      {
        // enable search only on the home page
        if (this.router.url === "/")
        {
          this.isLoggedIn = false;
        }
        else if (this.router.url.includes("home"))
        {
          this.isLoggedIn = true;
        }
        else
        {
          this.isLoggedIn = false;
        }
        console.log(this.router.url);
        console.log(document.cookie);
      }
    });
  }

  public navigateToResultsPage()
  {
    // we need to typecast to make typescript happy
    this.filterName = (<HTMLInputElement>document.getElementById('search')).value;
    this.router.navigate(['searchresults'],
      {
        queryParams:
        {
          query: this.filterName
        }
      }
    );
  }
}
