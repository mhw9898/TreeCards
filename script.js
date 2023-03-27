'use strict';

(function($){

  $(function() {
    
    // var datascource = {
    //   'name': 'Lao Lao',
    //   'title': 'general manager',
    //   'children': [
    //     { 'name': 'Bo Miao', 'title': 'department manager', 'className': 'middle-level',
    //       'children': [
    //         { 'name': 'Li Jing', 'title': 'senior engineer', 'className': 'product-dept' },
    //         { 'name': 'Li Xin', 'title': 'senior engineer', 'className': 'product-dept',
    //           'children': [
    //             { 'name': 'To To', 'title': 'engineer', 'className': 'pipeline1' },
    //             { 'name': 'Fei Fei', 'title': 'engineer', 'className': 'pipeline1' },
    //             { 'name': 'Xuan Xuan', 'title': 'engineer', 'className': 'pipeline1' }
    //           ]
    //         }
    //       ]
    //     },
    //     { 'name': 'Su Miao', 'title': 'department manager', 'className': 'middle-level',
    //       'children': [
    //         { 'name': 'Pang Pang', 'title': 'senior engineer', 'className': 'rd-dept' },
    //         { 'name': 'Hei Hei', 'title': 'senior engineer', 'className': 'rd-dept',
    //           'children': [
    //             { 'name': 'Xiang Xiang', 'title': 'UE engineer', 'className': 'frontend1' },
    //             { 'name': 'Dan Dan', 'title': 'engineer', 'className': 'frontend1' },
    //             { 'name': 'Zai Zai', 'title': 'engineer', 'className': 'frontend1' }
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // };
    var datascource ={
       'name': 'حساب اصول',
       'title': '1',
       'children': [
        { 'name': 'متداولة', 'title': '11', 'className': 'middle-level',
        'children': []},
        { 'name': 'غير متداولة', 'title': '12', 'className': 'middle-level'}]
    };
    
    var oc = $('#chart-container').orgchart({
      'data' : datascource,
      'nodeContent': 'title'
    });
  });

})(jQuery);