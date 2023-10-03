export default function createReportObject(employeeList) {
    return {
        allEmployees: {
            ...employeeList,
        },
        getNumberOfDepartment(empList) {
            return Object.keys(empList).length;
        },
    };
}