import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClearIcon from '@material-ui/icons/Clear';

class SelectedSkillList extends Component {
  // turns an array into an object with value being number of duplicates. eg. [Atk+5, Atk+5] -> {Atk+5: 2}
  filterArrayForDuplicates = arr => {
    return arr.reduce((result, current) => {
      if (!result[current]) {
        result[current] = 1;
      } else {
        result[current] += 1;
      }
      return result;
    }, {});
  };

  renderList() {
    const { selectedCellsById } = this.props.grid;

    let skillArray = Object.keys(selectedCellsById)
      .map(cellId => {
        return selectedCellsById[cellId].name;
      })
      .sort();

    let skillList = Object.keys(this.filterArrayForDuplicates(skillArray));
    let numberOfDuplicatesArray = Object.values(
      this.filterArrayForDuplicates(skillArray)
    );

    return skillList.map((item, index) => {
      return (
        <li className="active-grid list-group-item" key={index}>
          {item}
          <div style={{ display: 'inline-block', color: 'red' }}>
            {numberOfDuplicatesArray[index] > 1
              ? '\u00A0 x ' + numberOfDuplicatesArray[index]
              : null}
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="active-grid-list">
        <div className="card mt-5">
          <div className="card-body">
            <h5 className="card-title">
              Remaining Energy: {this.props.grid.remainingEnergy}
              <p>Orbs Spent: {this.props.grid.orbSpent}</p>
            </h5>
            <ul className="list-group list-group-flush">
              {' '}
              {this.renderList()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  grid: state.grid
});

export default connect(mapStateToProps)(SelectedSkillList);
