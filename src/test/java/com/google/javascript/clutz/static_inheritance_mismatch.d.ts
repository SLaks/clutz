declare namespace ಠ_ಠ.clutz.static_inherit {
  class Child extends Child_Instance {
    static privateParentOverrideField : number ;
    static static_fn (a : number ) : void ;
    static subTypeField : any [] ;
    static subTypeFieldMirrorType : ಠ_ಠ.clutz.static_inherit.Child ;
  }
  class Child_Instance extends ಠ_ಠ.clutz.static_inherit.Parent_Instance {
  }
}
declare module 'goog:static_inherit.Child' {
  import Child = ಠ_ಠ.clutz.static_inherit.Child;
  export default Child;
}
declare namespace ಠ_ಠ.clutz.static_inherit {
  class GrandChild extends GrandChild_Instance {
    static static_fn (a : boolean ) : void ;
    static subTypeFieldMirrorType : ಠ_ಠ.clutz.static_inherit.GrandChild ;
  }
  class GrandChild_Instance extends ಠ_ಠ.clutz.static_inherit.Child_Instance {
  }
}
declare module 'goog:static_inherit.GrandChild' {
  import GrandChild = ಠ_ಠ.clutz.static_inherit.GrandChild;
  export default GrandChild;
}
declare namespace ಠ_ಠ.clutz.static_inherit {
  class Parent extends Parent_Instance {
    static privateChildOverrideField : number ;
    static static_fn (a : string ) : void ;
    static subTypeField : GlobalObject ;
    static subTypeFieldMirrorType : ಠ_ಠ.clutz.static_inherit.Parent ;
  }
  class Parent_Instance {
    private noStructuralTyping_: any;
  }
}
declare module 'goog:static_inherit.Parent' {
  import Parent = ಠ_ಠ.clutz.static_inherit.Parent;
  export default Parent;
}
