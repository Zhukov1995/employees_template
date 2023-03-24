import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {name:"Alex J" , salary: 800, increase: false, rise: false, id: 1},
        {name:"Peter S" , salary: 1200, increase: false, rise: false, id: 2},
        {name:"Vlad K" , salary: 2800, increase: false, rise: false, id: 3},
      ],
      term: "",
      filter: "all"
    }
    this.maxID = 4;
  }

  onDelete = (id) => {
    this.setState(({data}) => ({
      data: data.filter(item => item.id !== id)
    }))
  }
  

  onIncrease = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, increase: !item.increase}
        }
        return item;
      })
    }))
  }


  onRise = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, rise: !item.rise}
        }
        return item;
      })
    }))
  }
  
  addNewEmployees = (name,salary) => {
    const newObj = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxID++
    }
    this.setState(state => ({
      data: [...state.data,newObj]
    }))
  }

  onSearch = (items,term) => {
    term = term.toLowerCase();
    if(term.length === 0) return items;
    return items.filter(item => item.name.toLowerCase().indexOf(term) > -1);
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  onFilter = (items,filter) => {
    if(filter === "all") {
      return items;
    }
    if(filter === "rise") {
      return items.filter(item => item.rise);
    }
    if(filter === "salaryMore") {
      return items.filter(item => item.salary > 1000);
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render() {
    const {data,term,filter} = this.state;
    const viewData = this.onFilter(this.onSearch(data,term),filter);
    const countEmployees = this.state.data.length;
    const countIncrease = this.state.data.filter(item => item.increase).length;
    return (
      <div className="app">
          <AppInfo countEmployees={countEmployees} countIncrease={countIncrease}/>
  
          <div className="search-panel">
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
          </div>
          
          <EmployeesList data={viewData} onDelete={this.onDelete} onIncrease={this.onIncrease} onRise={this.onRise}/>
          <EmployeesAddForm addNewEmployees={this.addNewEmployees}/>
      </div>
    );
  }
}

export default App;
