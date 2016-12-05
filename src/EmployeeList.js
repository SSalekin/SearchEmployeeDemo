import React, { Component } from 'react';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = { employees: this.props.employees };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
    let key = e.target.value.toLowerCase();
    if (key !== "") {
      this.setState({
        employees: this.props.employees.filter( x => (x.name.toLowerCase().includes(key) || x.phone.includes(key)))
      });
    } else {
      this.setState({ employees: this.props.employees });
    }
  }

  render() {
    const divStyle = {
      padding: '2px 5px',
      borderRadius: '10px',
      background: '#eee',
      margin: '5px',
      width: '200px'
    };

    return (
      <div>
        <input onChange={this.onSearch} />
        {
          this.state.employees.map (
            (employee) => {
              return (
                <div key={employee.id} style={divStyle}>
                  <p>{employee.name}</p>
                  <p>{employee.phone}</p>
                </div>
              );
            }
          )
        }
      </div>
    );
  }
}

export default EmployeeList;
