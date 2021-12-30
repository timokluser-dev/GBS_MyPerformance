import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;

  ngOnInit() {
    const navbarRef = (document.querySelector('header.fixed-top') as HTMLElement);
    const navbarHeight = navbarRef.offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
