/**
 * Custom function for 
 * Datatable library
 * 
 * Usage:
 * $(window).smartresize(function(){  
 *     // code here
 * });
 * 
  Usage: 

  let exportOptions = {'rows': {selected: true} ,columns: ['2,3,4,5,6,7,8,9,10,11']};
  let dtButtons = [{ extend : 'excel',exportOptions: exportOptions},{ extend : 'csv',exportOptions: exportOptions},{ extend : 'pdf',exportOptions: exportOptions},{ extend : 'print',exportOptions: exportOptions},];
  let dt1 = customeDatatable({
    'div' : '#tableId',
    'url' : 'URL FOR POSTED DATA',
    'orderColumn' : 10,
    'iDisplayLength' : 10,
    'dom' : 'Bfrtip',
    'columnCustomeTypeTarget' : 10,
    'defaultSearching': false,
    'responsive': true,
    'lengthMenu': '', // [[5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "All"]]
    'order' : 'desc',
    'selectStyle' : 'multi',
    'collectionButtons' : dtButtons,
    'processing' : true,
    'serverSide' : true,
    'processingGif' : '<span>Loading.. <img  src="load.gif" /></span>',
    'buttonClassName' : 'btn-sm',
    'columnCustomType' : 'date-eu',
    'customFieldsArray': ['category_id','seller_id','seller_code','sale_person_id','item_status','keyword','registration_no','days_filter','datefrom','dateto'],
    'dataColumnArray': [{'data':'id'},{'data':'image'},{'data':'name'},{'data':'category_id'},{'data':'registration_no'},{'data':'make'},{'data':'model'},{'data':'price'},{'data':'keyword'},{'data':'seller_id'},{'data':'created_on'},{'data':'item_status'},{'data':'action'}]
  });
  
 */

 function customeDatatable(options){

  var datatableObj = $(options.div).DataTable({
  'createdRow': function( row, data, dataIndex ) {
    $(row).attr('id', data.id);
  },
  dom: options.dom,
    buttons: [
      {
        extend: 'collection',
        text: 'Export',
        className: options.buttonClassName,
        buttons: options.collectionButtons
       },{
        extend: 'selectAll',
        className: options.buttonClassName,
        text: 'Select All',
        exportOptions: exportOptions
      },{
        extend: 'selectNone',
        className: options.buttonClassName,
        text: 'Deselect',
        exportOptions:exportOptions
      }, 
    ],
    'select': {
      style: options.selectStyle
    },
    'processing': options.processing, // true , false 
    'serverSide': options.serverSide, // true , false
    'serverMethod': 'post',
    'searching': options.defaultSearching, // Remove default Search Control
    'ajax': {
        'url':options.url,
        'data': function(data){
          // Link inputs Fields with post data array
          jQuery.each(options.customFieldsArray, function(index, item) {
            data[item] = $('#'+item).val();
          })
        }
    },
    'columns':  options.dataColumnArray, // DB columns array server side
    'responsive': options.responsive, // responsive option
    'order': [[ options.orderColumn, options.order ]],
    'columnDefs' : [{"targets":options.columnCustomeTypeTarget, "type":options.columnCustomType}],
    'language': {
      "infoFiltered":"Loading..",
      "processing": options.processingGif
    },
    'lengthMenu': options.lengthMenu, // [[5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "All"]]
    'iDisplayLength': options.iDisplayLength,
  });
  return datatableObj;
}
