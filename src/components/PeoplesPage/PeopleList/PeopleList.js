import React, {Component} from 'react';

class PeoplesList extends Component {
    render() {
        return (
            <div className="list">
                <div className="title-table-people">Список запизавшихся на саммит</div>
                <table>
                    <thead>
                        <tr className="table-header">
                            <th>Имя</th>
                            <th>Фамилия</th>
                            <th>Возраст</th>
                            <th>Отделение</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.items.map((el, i) =>
                        <tr className="people-line" id={el.id}  key={el.id}>
                            <td>{el.name}</td>
                            <td>{el.lastName}</td>
                            <td>{el.age}</td>
                            <td>{el.course}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PeoplesList;