import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = (props) => {
    const{data,onDelete,onIncrease,onRise} = props;

    const viewData = data.map(item => {
        const id = item.id;
        return <EmployeesListItem {...item} 
                    key={id} 
                    onDelete={() => onDelete(id)} 
                    onIncrease={() => onIncrease(id)} 
                    onRise={() => onRise(id)}
                />
    })
    return (
        <ul className="app-list list-group">
            {viewData}
        </ul>
    )
}

export default EmployeesList;