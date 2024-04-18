import * as React from "react";

import { DataGrid } from "@mui/x-data-grid";

const columns = [
    {
        field: "id",
        headerName: "ID",
        width: 90,
    },
    {
        field: "task",
        headerName: "Task",
        width: 150,
    },
    {
        field: "domain",
        headerName: "Domain",
        width: 150,
    },
    {
        field: "impact",
        headerName: "Impact",
        width: 150,
    },
    {
        field: "deadline",
        headerName: "Deadline",
        width: 150,
    },
    {
        field: "score",
        headerName: "Score",
        width: 150,
    },
];

const rows = [
    {
        id: 1,
        task: "Brush Teeth",
        domain: "Hygiene",
        impact: "Maintenance",
        deadline: "01/01/2024 @ 00:00:00",
        score: "1.0",
    },
];

export default function TasksList() {
    return (
        <div className="tasks-overview">
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>
    );
}