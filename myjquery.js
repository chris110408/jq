/**
 * Created by leichen on 11/27/15.
 */
(function(){

    //(21-94)   define variable and function; ！jquery= function(){}

    //(96-283) add method and attr to Jquery object 给jq 添加方法和属性

    //(285-347) define extend: jq inheritance
    //(349-817)  jquery.extend(),static method which could use by $

    //(877,2856) Sizzle: complex selector example$('ul li+p input.class')

    //(2880,3042) Callbacks - function manager
    //                                    example
        //   function fn1(){alert(1)}
        //   function fn2(){alert(2)}
        //   var cb= $.callbacks();
        //   cb.add(fn1);
        //   cb.add(fn2)
        //   cb.fire();  /// 1,2

    //(3043,3183) deferred: async manager
        //                                example
        //           var dfd= $.deferred.resolve();

        //        setTimeout(function(){
        //              alert(1)
        //              dfd.resolve();
        //        },1000);
        //          dfd.done(function(){
        //              alert(2)
        //          })
    //(3184,3295) support: detect web browser by it's function
    //(3308,3652) data() protect memory leak
         //                                example
        //$('#div1').data('name','hello');
        //$('#div1').data('name');

    //(3653,3797) queue() dequeue()
    //                                      example
        //$('#div1').animate({left:100});
        //$('#div1').animate({left:200});
        //$('#div1').animate({left:300});

    //(3803,4299)  element attr; attr() prop() val() addClass().....

    //(4300,5128) event; on() trigger();

    //(5140,6057)  DOM:

    //(6058,6620) css();

    //(6621,7854)  ajax() load() getJson()

    //(7855,8584)  animate()

    //(8585,8792) offset()
    //(8804,8821) module.exports


    //(8826)connect to window ；！window.jQuery = window.$ = jQuery;
})()