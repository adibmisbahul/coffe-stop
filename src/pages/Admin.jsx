import React from "react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { AgCharts } from "ag-charts-react";

import CardAdmin from "../Components/Fragment/CardAdmin";
import SideBarAdmin from "../Components/Fragment/SideBarAdmin";

import peopleIcon from "../assets/image/fluent--people.svg";
import foodIcon from "../assets/image/food.svg";
import dollarIcon from "../assets/image/dollar.svg";
import transactionIcon from "../assets/image/transaction.svg";
import Avatar from "../assets/image/Avatar.png";
import getDataSignatureMenu from "../Components/Fragment/data";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import { getDataTransaction } from "../services/services";

ModuleRegistry.registerModules([AllCommunityModule]);

const Admin = () => {
  const [karyawan, setKaryawan] = useState([]);
  const [product, setProduct] = useState([]);
  const [transaction, setDataTransaction] = useState([""]);

  const [options, setOptions] = useState({
    animation: {
      enabled: true,
      duration: 100,
    },
    data: [
      { month: "Jan", avgTemp: 2.3, iceCreamSales: 1002000 },
      { month: "Mar", avgTemp: 6.3, iceCreamSales: 302000 },
      { month: "May", avgTemp: 16.2, iceCreamSales: 800000 },
      { month: "Jul", avgTemp: 22.8, iceCreamSales: 1254000 },
      { month: "Sep", avgTemp: 14.5, iceCreamSales: 950000 },
      { month: "Nov", avgTemp: 8.9, iceCreamSales: 200000 },
    ],

    series: [
      {
        type: "bar",
        xKey: "month",
        yKey: "iceCreamSales",
        cornerRadius: 15,
        stacked: true,
      },
    ],
    axes: [
      {
        type: "category",
        position: "top",
        width: 100,
        gridLine: {
          enabled: false,
        },
      },
      {
        type: "number",
        position: "right",
        gridLine: {
          enabled: true,
        },
      },
    ],
  });

  const [signatureMenu, setSignatureMenu] = useState({
    data: getDataSignatureMenu(),
    animation: {
      enabled: true,
      duration: 1000,
    },
    title: {
      text: "Top most menu",
    },
    series: [
      {
        type: "bar",
        xKey: "month",
        yKey: "iceCreamSales",
        position: "bottom",
        cornerRadius: 5,
      },
    ],
  });

  const handleDataTransaction = async () => {
    const result = await getDataTransaction();
    console.log(result);
    setDataTransaction(result);
  };

  useEffect(() => {
    handleDataTransaction();
  }, []);

  const [rowData, setRowData] = useState([
    {
      id: transaction.id,
      amount: transaction.amount,
      paymen_method: transaction.paymen_method,
      order_date: transaction.order_date,
    },
  ]);

  useEffect(() => {
    if (transaction.length > 0) {
      const mappedData = transaction.map((trx) => ({
        id: trx.id,
        amount: trx.amount,
        paymen_method: trx.paymen_method,
        order_date: trx.order_date,
      }));

      setRowData(mappedData);
    }
  }, [transaction]);

  const [colDefs, setColDefs] = useState([
    { field: "id" },
    { field: "amount" },
    { field: "paymen_method" },
    { field: "order_date" },
  ]);

  return (
    <div className="flex w-auto h-[99.7vh] bg-white">
      <div className="basis-[8%] p-5 flex items-center">
        <SideBarAdmin />
      </div>
      <div className="basis-[46%] ">
        <div className="flex justify-around mt-4">
          <CardAdmin
            title={"Total order"}
            data={120}
            icon={foodIcon}
            detailText={"Total order hari ini"}
          />
          <CardAdmin
            title={"margin"}
            data={230000}
            icon={foodIcon}
            detailText={"margin hari ini"}
          />
          <CardAdmin
            title={"halo"}
            data={120}
            icon={foodIcon}
            detailText={"Total order hari ini"}
          />
        </div>
        <div className=" rounded-lg w-[100] h-[72svh] flex-col flex justify-end mt-2  border-gray-400 border">
          <h1 className="mt-3 ml-4 text-xl font-semibold ">Revenue</h1>
          <AgCharts
            options={options}
            style={{ width: "100%", height: "65vh" }}
          />
        </div>
      </div>
      <div className=" basis-[46%] flex flex-col gap-2 p-4 pb-6">
        <div className="w-auto h-[40vh] border-gray-400 border  rounded-lg">
          <AgCharts
            options={signatureMenu}
            style={{ width: "100%", height: "30vh" }}
          />
        </div>
        <div className="w-auto h-full border border-gray-400 rounded-lg ag-theme-alpine">
          <AgGridReact rowData={rowData} columnDefs={colDefs} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
