import { Component, Element, h } from '@stencil/core';
import { makeDivideCurve } from '../../helpers/rayTrace';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  @Element() el: HTMLElement;

  componentDidLoad() {
    document.querySelector('ion-content').innerHTML = '';
    makeDivideCurve();
  }

  render() {
    return (
      <ion-app>
        <ion-content></ion-content>
      </ion-app>
    );
  }
}
