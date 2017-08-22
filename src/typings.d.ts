/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface JQuery {
    iCheck,
    select2,
    datepicker,
    AdminLTE: any,
    slimscroll: any,
    tooltip: any
}

interface JQueryStatic {
    AdminLTE: any
}

declare var Pace: any;