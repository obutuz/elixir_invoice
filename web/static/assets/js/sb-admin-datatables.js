//$(document).ready(function(){$("#dataTable").DataTable({responsive: true})});
$(document).ready(function() {
    $('#dataTableSort').DataTable( {
                    dom: 'rt',
                    lengthMenu: [[25, 50, 100, -1], [25, 50, 100, "All"]],
                    responsive: false
                } );
} );

$(document).ready(function() {
    $('#dataTableBasic').DataTable( {
                    dom: 'lfrtip',
                    lengthMenu: [[25, 50, 100, -1], [25, 50, 100, "All"]],
                    responsive: false
                } );
} );

$(document).ready(function() {
    $('#dataTable').DataTable( {
                    //dom: 'Bfrltip',
                    dom : "<'row'<'col-sm-6'B><'col-sm-6'f>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-6'i><'col-sm-6'p>>", 
                    lengthMenu: [[25, 50, 100, -1], [25, 50, 100, "All"]],
		            deferRender: true,
                    buttons: [ 'csv', 'excel', 'print' ]
                    } );
} );


