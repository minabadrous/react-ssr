import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import DataList from "../components/dataList";
import { Helmet } from "react-helmet";

const UsersList = ({ users, fetchUsers }) => {
    useEffect(() => {
        fetchUsers();
    }, []);

    const head = (
        <Helmet>
            <title>{`${users.length} Users Loaded`}</title>
            <meta property="og:title" content="Users List" />
        </Helmet>
    );

    return <DataList head={head} title="Users List" data={users} />;
};

const mapStateToProps = (state) => {
    return { users: state.users };
};

const loadData = (store) => store.dispatch(fetchUsers());

export default {
    component: connect(mapStateToProps, { fetchUsers })(UsersList),
    loadData,
};
