import { Component, Prop, Listen, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'my-toggle-button',
  styleUrl: 'my-toggle-button.css',
  shadow: true
})
export class MyToggleButton {
  @Prop({ mutable: true }) on: boolean = false;
  @Prop() text: string;
  @Event() switchOff: EventEmitter<boolean>;

  @Listen('click', { capture: true })
  handleClick() {
    this.on = !this.on;
  }

  @Listen('dblclick')
  handleDoubleClick() {
    this.on = !this.on;
    if (!this.on) {
      this.switchOff.emit(false);
    }
  }

  @Listen('switchOff', { target: 'window' })
  switchOffHandler(event: CustomEvent<boolean>) {
    if (!event.detail) {
      this.on = false;
    }
  }

  render() {
    return (
      <button class={{'btn': true, 'btn-on': this.on}}>{ this.text }</button>
    );
  }

}
