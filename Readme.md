# DataTables plug-in for jQuery

DataTables is a table enhancing plug-in for the [jQuery](//jquery.com) Javascript library, adding sorting, paging and filtering abilities to plain HTML tables with minimal effort. The stated goal of DataTables is:

> To enhance the accessibility of data in HTML tables.

To meet this goal, DataTables is developed with two distinct groups of users in mind:

* You the developers using DataTables. For developers DataTables provides a wide array of options for how data should be obtained, displayed and acted upon, along with an extensive API for accessing and manipulating the table.

* End users. For those using the interface DataTables presents, actions to get the most from the information contained in tables, such as sorting and filtering, along with paging and scrolling of the data in table, are easy to use, intuitive and fast.


## Installing DataTables

To use DataTables, the primary way to obtain the software is to use the [DataTables downloader](//datatables.net/download). You can also include the individual files from the [DataTables CDN](//cdn.datatables.net). See the [documentation](//datatables.net/manual/installation) for full details.

### Usage
 Using this script we can manage DataTable features with Ajax 
````JS
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
    'lengthMenu': [], // [[5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "All"]]
    'order' : 'desc',
    'selectStyle' : 'multi',
    'collectionButtons' : dtButtons,
    'exportOptionsSelect' : {},
    'processing' : true,
    'serverSide' : true,
    'processingGif' : '<span>Loading.. <img  src="load.gif" /></span>',
    'buttonClassName' : 'btn-sm',
    'columnCustomType' : 'date-eu',
    'customFieldsArray': ['category_id','seller_id','seller_code','sale_person_id','item_status','keyword','registration_no','days_filter','datefrom','dateto'],
    'dataColumnArray': [{'data':'id'},{'data':'image'},{'data':'name'},{'data':'category_id'},{'data':'registration_no'},{'data':'make'},{'data':'model'},{'data':'price'},{'data':'keyword'},{'data':'seller_id'},{'data':'created_on'},{'data':'item_status'},{'data':'action'}]
  });


````