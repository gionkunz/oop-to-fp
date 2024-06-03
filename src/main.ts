/*
  Better class-based OOP composability using some fine TS mixins :-)
*/

export type Constructor = new (...args: any[]) => {};

export const developerMixin = <TBase extends Constructor>(Base: TBase = class {} as TBase) => 
  class extends Base {
    readonly lang = 'TypeScript';
    develop() {
      console.log(`Developing in ${this.lang}...`);
    }
  };

export const designerMixin = <TBase extends Constructor>(Base: TBase = class {} as TBase) =>
  class extends Base {
    readonly color = 'blue';
    design() {
      console.log(`Designing in ${this.color}...`);
    }
  };

export class DeveloperDesigner extends designerMixin(developerMixin()) {
  designAndDevelop() {
    console.log(`Designing and developing something ${this.color} in ${this.lang}`);
  }
}

const d = new DeveloperDesigner();
d.develop();
d.design();
d.designAndDevelop();