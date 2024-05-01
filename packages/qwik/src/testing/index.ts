import type { JSXOutput } from '@builder.io/qwik';
// register vitest matchers
import './vdom-diff.unit-util';

export { createDOM } from './library';
export { expectDOM } from './expect-dom';
export { createDocument } from './document';
export { getTestPlatform } from './platform';
export { domRender, ssrRenderToDom, emulateExecutionOfQwikFuncs } from './rendering.unit-util';
export { walkJSX, vnode_fromJSX } from './vdom-diff.unit-util';
export { trigger, ElementFixture } from './element-fixture';

// TODO get api-extractor to export this too
interface CustomMatchers<R = unknown> {
  toMatchVDOM(expectedJSX: JSXOutput): R;
  toMatchDOM(expectedDOM: JSXOutput): Promise<R>;
}

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
