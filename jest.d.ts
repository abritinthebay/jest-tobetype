// In theory this should stop TypeScript from choking on that there is an extension to Jest.
declare global {
    namespace jest {
      interface Matchers<R> {
        toBeType(received: any, expected: string): R
      }
    }
  }
  
  export {};