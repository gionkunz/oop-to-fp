/*
  Using the Class-based OOP behavior pattern
*/

export interface Developing {
  readonly lang: string;
  develop(): void;
}

export class Developer implements Developing {
  readonly lang = 'TypeScript';
  develop() {
    console.log(`Developing in ${this.lang}...`);
  }
}

export interface Designing {
  readonly color: string;
  design(): void;
}

export class Designer implements Designing {
  readonly color = 'blue';
  design() {
    console.log(`Designing in ${this.color}...`);
  }
}

export class DeveloperDesigner implements Developing, Designing {
  developer = new Developer();
  designer = new Designer();

  get color() {
    return this.designer.color;
  }

  get lang() {
    return this.developer.lang;
  }

  design(): void {
    return this.designer.design();
  }

  develop(): void {
    return this.developer.develop();
  }

  designAndDevelop() {
    console.log(`Designing and developing something ${this.designer.color} in ${this.developer.lang}`);
  }
}

const d = new DeveloperDesigner();
d.develop();
d.design();
d.designAndDevelop();