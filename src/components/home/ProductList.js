import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import FaCloudUpload from 'react-icons';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css' ;
import { Button } from 'react-bootstrap';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

debugger;

const cellEditProp = {
  mode: 'click'
};

const ProductList = ({
  products,
  activePage,
  onNavigatePage
}) => {
  const productList = products.productList;
  
  
  const options = {
    hideSizePerPage: true,
    page: activePage,
    onPageChange: onNavigatePage,
    handleConfirmDeleteRow: customConfirm,
    searchField: createCustomSearchField
    
  };

  const createCustomSearchField = (props) => {
    return (
      <SearchField
          className='my-custom-class'
          defaultValue='2000'
          placeholder='Input a number'/>
    );
  }
  function customConfirm(next, dropRowKeys) {
    const dropRowKeysStr = dropRowKeys.join(',');
    debugger;
    confirmAlert({
           title: 'Alert !!!',
           message: `Are you sure you want to delete the Record ${dropRowKeysStr} ?`,
           buttons: [
             {
               label: 'Yes',
               onClick: () => next()
             },
             {
               label: 'No',
             }
          ]
         })


  }


  function checkbox(cell, row){
    return "<input className='react-bs-select-all'  type='checkbox'  name={ 'checkbox' + this.props.rowIndex }  id={ 'checkbox' + this.props.rowIndex }      onChange={ this.props.onChange } />'"
   }
    
  function  handleDeleteRow(row) {
    debugger;
   this.props.deleteAction(row);
}
  
   const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true,
    bgColor: '#ccc',
  //onSelect: onRowSelect,
  //onSelectAll: onSelectAll
    //unselectable: [ 1, 3 ] // give rowkeys for unselectable row
  };

  const cellEditProp = {
    mode: 'click',
    blurToSave: true
  };


 
  return(
<div>

    <BootstrapTable id="capmaignList"
      data={productList}
      striped={true} 
      hover={true}
      pagination={ true }
      search={ true }
      searchPlaceholder={'Search Campaign Name...'}
      fetchInfo={{dataTotalSize: products.resultsCount}}
      options={ options}
      selectRow={ selectRowProp }
      cellEdit={ cellEditProp }
      deleteRow={ true }
      pagination
      
      filter={ filterFactory() }
      >
      <TableHeaderColumn  isKey dataField="id" > Id </TableHeaderColumn>
      <TableHeaderColumn  dataField="campaignName"  filter={ textFilter()}  editable={ { type: 'textarea' } }>  Campaign Name  </TableHeaderColumn>
      <TableHeaderColumn  dataField="type" editable={false} searchable={ false }> Type </TableHeaderColumn>
      <TableHeaderColumn  dataField="lastSaved" editable={false} searchable={ false }> Last Saved </TableHeaderColumn>
      
    </BootstrapTable>
    </div>
  );
};


ProductList.propTypes = {
  products: PropTypes.object.isRequired,
  activePage: PropTypes.number.isRequired,
  onNavigatePage: PropTypes.func.isRequired
}

export default ProductList;
