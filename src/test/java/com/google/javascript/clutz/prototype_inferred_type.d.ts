declare namespace ಠ_ಠ.clutz.foo {
  class Klass extends Klass_Instance {
    /**
     * Crazy pattern, I have only seen it used by jquery.fn = jquery.prototype
     */
    static foo : any ;
  }
  class Klass_Instance {
    private noStructuralTyping_: any;
  }
}
declare module 'goog:foo.Klass' {
  import Klass = ಠ_ಠ.clutz.foo.Klass;
  export default Klass;
}
