import React, { useEffect } from "react";
import DataList from "../components/dataList";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";
import requireAuth from "../components/hocs/requireAuth";

const AdminsListPage = ({ admins, fetchAdmins }) => {
    useEffect(() => {
        fetchAdmins();
    }, []);

    return <DataList title="$Protected Admins List" data={admins} />;
};

const mapStateToProps = ({ admins }) => {
    return { admins };
};

const loadData = (store) => store.dispatch(fetchAdmins());

export default {
    component: connect(mapStateToProps, { fetchAdmins })(
        requireAuth(AdminsListPage)
    ),
    loadData,
};
