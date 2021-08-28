import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { db } from "./FirebaseConfig";

function Table() {
  const [Arr, setArr] = useState([]);

  useEffect(() => {
    getFormValues();
  }, []);

  const getFormValues = () => {
    db.collection("FormData")
      .orderBy("timestamp", "asc")
      .onSnapshot(function (querySnapshot) {
        setArr(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            firstName: doc.data().FirstName,
            lastName: doc.data().LastName,
            age: doc.data().Age,
            city: doc.data().City,
            dateOfBirth: doc.data().DateOfBirth,
          }))
        );
      });
  };

  const column = [
    {
      title: "First Name",
      field: "firstName",
    },
    {
      title: "Last Name",
      field: "lastName",
    },
    {
      title: "Age",
      field: "age",
    },
    {
      title: "City",
      field: "city",
    },
    {
      title: "DateOfBirth",
      field: "dateOfBirth",
    },
  ];

  return (
    <>
      <MaterialTable
        style={{ padding: 40 }}
        columns={column}
        data={Arr}
        title="INFORMATION"
        options={{ search: true, filtering: false }}
        editable={{
          // onRowUpdate: (newData, oldData) =>
          //   new Promise((resolve, reject) => {
          //     setTimeout(() => {
          //       const index = oldData.tableData.id;
          //       const dataUpdate = [...Arr];
          //       dataUpdate[index] = newData;
          //       const newUpdatedArr = setArr([...dataUpdate]);
          //       db.collection("FormData")
          //         .doc(Arr[index].id)
          //         .update({ newUpdatedArr });
          //       resolve();
          //     }, 1000);
          //   }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const index = oldData.tableData.id;
                db.collection("FormData").doc(Arr[index].id).delete();
                resolve();
              }, 1000);
            }),
        }}
      />
    </>
  );
}

export default Table;
