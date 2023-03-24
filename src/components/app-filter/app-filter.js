import "./app-filter.css";

const AppFilter = (props) => {

    const buttons = [
        {name: "all", label: "Все сотрудники"},
        {name: "rise", label: "На повышение"},
        {name: "salaryMore", label: "З/П больше 1000$"},
    ];

    const showButtons = buttons.map(({name,label}) => {
        const active = props.filter === name;
        const btnsClass = active ? "btn btn-light" : "btn btn-outline-light";
        return  <button type="button"
                        className={`${btnsClass}`}
                        key={name}
                        onClick={() => props.onFilterSelect(name)}>
                        {label}
                        
                </button>
    })

    return (
        <div className="btn-group">
            {showButtons}
        </div>
    )
}

export default AppFilter;