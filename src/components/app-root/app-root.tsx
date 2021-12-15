import { Component, Element, h } from '@stencil/core';
import { makeRayTrace } from '../../helpers/rayTrace';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  @Element() el: HTMLElement;

  componentDidLoad() {
    document.querySelector('ion-content').innerHTML = '';
    makeRayTrace();
  }

  render() {
    return (
      <ion-app>
        <ion-content></ion-content>
      </ion-app>
    );
  }
}
