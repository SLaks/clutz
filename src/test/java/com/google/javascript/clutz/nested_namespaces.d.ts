declare namespace ಠ_ಠ.clutz {
  enum module$exports$nested$NotNested {
  }
}
declare module 'goog:nested.NotNested' {
  import alias = ಠ_ಠ.clutz.module$exports$nested$NotNested;
  export default alias;
}
declare namespace ಠ_ಠ.clutz {
  enum module$exports$nested$NotNestedEither {
  }
}
declare module 'goog:nested.NotNestedEither' {
  import alias = ಠ_ಠ.clutz.module$exports$nested$NotNestedEither;
  export default alias;
}
declare namespace ಠ_ಠ.clutz {
  class module$exports$nested$PrivateC extends module$exports$nested$PrivateC_Instance {
  }
  class module$exports$nested$PrivateC_Instance {
    private noStructuralTyping_: any;
  }
}
declare module 'goog:nested.PrivateC' {
  import alias = ಠ_ಠ.clutz.module$exports$nested$PrivateC;
  export default alias;
}
declare namespace ಠ_ಠ.clutz {
  enum module$exports$nested$PrivateC$Enum {
  }
}
declare module 'goog:nested.PrivateC.Enum' {
  import alias = ಠ_ಠ.clutz.module$exports$nested$PrivateC$Enum;
  export default alias;
}
declare namespace ಠ_ಠ.clutz {
  var module$exports$nested$foo : ಠ_ಠ.clutz.module$exports$nested$PrivateC ;
}
declare module 'goog:nested.foo' {
  import alias = ಠ_ಠ.clutz.module$exports$nested$foo;
  export default alias;
}
declare namespace ಠ_ಠ.clutz {
  class module$exports$nested$foo$Klass extends module$exports$nested$foo$Klass_Instance {
  }
  class module$exports$nested$foo$Klass_Instance {
    private noStructuralTyping_: any;
  }
}
declare module 'goog:nested.foo.Klass' {
  import alias = ಠ_ಠ.clutz.module$exports$nested$foo$Klass;
  export default alias;
}
