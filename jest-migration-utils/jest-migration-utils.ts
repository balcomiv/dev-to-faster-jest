// Import this where ever you have broken tests (after running the migration script) relating to creatSpy or createSpyObj.

export const createSpyObj = (baseName, methodNames?): { [key: string]: jest.Mock<any> } => {
    let obj: any = {};
  
    for (let i = 0; i < methodNames.length; i++) {
      obj[methodNames[i]] = jest.fn();
    }
  
    return obj;
};
  
export const createSpy = (baseName?) => {
    return jest.fn();
};