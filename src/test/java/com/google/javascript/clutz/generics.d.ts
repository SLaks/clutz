declare namespace ಠ_ಠ.clutz.generics {
  interface ExtendGenericInterface < TYPE > extends ಠ_ಠ.clutz.generics.GenericInterface < TYPE > {
  }
  class ExtendsGenericClass < TYPE > extends ಠ_ಠ.clutz.generics.Foo < TYPE , number > {
  }
  class Foo < T , U > {
    private noStructuralTyping_: any;
    constructor (a : number ) ;
    get ( ) : T ;
    loop < V , W > (t : T , v : V ) : any ;
    set (t : T ) : void ;
  }
  interface GenericInterface < TYPE > {
  }
  class ImplementsGenericInterface < TYPE > implements ಠ_ಠ.clutz.generics.GenericInterface < TYPE > {
    private noStructuralTyping_: any;
  }
  var arrayMissingTypeParam : any [] ;
  var fooMissingAllTypeParams : ಠ_ಠ.clutz.generics.Foo < any , any > ;
  var fooMissingOneTypeParam : ಠ_ಠ.clutz.generics.Foo < string , any > ;
  function genericFunction < T > (a : T ) : T ;
  function identity < T > (a : T ) : T ;
  function objectWithGenericKeyType < K , V > (obj : { [ /* warning: coerced from K */ s: string ]: V } ) : void ;
}
declare namespace ಠ_ಠ.clutz.goog {
  function require(name: 'generics'): typeof ಠ_ಠ.clutz.generics;
}
declare module 'goog:generics' {
  import alias = ಠ_ಠ.clutz.generics;
  export = alias;
}
