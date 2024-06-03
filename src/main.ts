/*
  Using the Class-based OOP behavior pattern
*/


export interface Developer {
  readonly lang: string;
}

export interface Designer {
  readonly color: string;
}

export type DesignerAndDeveloper = Designer & Developer;

export function develop(developer: Developer) {
  console.log(`Developing in ${developer.lang}...`);
}

export function design(designer: Designer) {
  console.log(`Designing in ${designer.color}...`);
}

export function designAndDevelop(designerAndDeveloper: DesignerAndDeveloper) {
  console.log(`Designing and developing something ${designerAndDeveloper.color} in ${designerAndDeveloper.lang}`);
}

const developer: Developer = {
  lang: 'TypeScript'
};

const designer: Designer = {
  color: 'blue'
};

const designingDeveloper: DesignerAndDeveloper = {
  ...developer,
  ...designer
};

develop(developer);
design(designer);
designAndDevelop(designingDeveloper);
