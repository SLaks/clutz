declare namespace ಠ_ಠ.clutz.def.ctor {
  class A extends A_Instance {
  }
  class A_Instance {
    private noStructuralTyping_: any;
    constructor (a : string ) ;
  }
  class B extends B_Instance {
  }
  class B_Instance extends ಠ_ಠ.clutz.def.ctor.A_Instance {
    constructor ( ) ;
  }
}
declare module 'goog:def.ctor' {
  import ctor = ಠ_ಠ.clutz.def.ctor;
  export = ctor;
}
