import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


export default class MyTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
       //     loading: false,    TODO
            data: []
        };


    }

    componentDidMount() {
        fetch('/api/dapps')
            .then(res => res.json())
            .then(dapps => {
                this.setState({
                    data: dapps
                });
            });
    }

    render() {

        const columns = [{
            Header: 'Rank',
            accessor: 'rank' // String-based value accessors!
        }, {
            Header: 'Name',
            accessor: 'name',
        }, {
            Header: 'Usage',
            accessor: 'usage' 
            
        }]

        return ( 
            <ReactTable
                data={this.state.data}
                columns={columns} />
        )
    }
}
