import React from 'react';
import { connect } from 'react-redux';

import List from './List';
import { getExpenseList, deleteExpense } from '../../actions';

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
};

const mapDispatchToProps = (dispatch) => ({
  getExpenses: (payload) => dispatch(getExpenseList(payload)),
  removeExpense: (id) => dispatch(deleteExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
