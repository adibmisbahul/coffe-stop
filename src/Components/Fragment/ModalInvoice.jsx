import React from "react";

const ModalInvoice = (props) => {
  const {
    showModal,
    cart,
    calculateTotalPrice,
    handleSelection,
    paymentMethod,
    handlePayment,
  } = props;

  return (
    <>
      <div className="absolute flex items-center justify-center w-full min-h-full backdrop-blur-sm">
        <div className="w-[60vw] h-[80vh] bg-white border shadow p-3 rounded-md relative">
          <button
            onClick={() => showModal(false)}
            className="absolute w-6 text-white bg-blue-600 rounded-full top-2 right-2"
          >
            X
          </button>

          <div className="relative mt-8 overflow-x-auto">
            <table className="w-full text-sm text-left text-black">
              <thead className="text-xs text-gray-900 uppercase">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jumlah
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index} className="bg-white">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {item.title}
                    </th>
                    <td className="px-6 py-4">
                      {Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(item.price)}
                    </td>
                    <td className="px-6 py-4">{item.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <h2 className="font-semibold">
              Total Price: {calculateTotalPrice()}
            </h2>
            <select
              onChange={handleSelection}
              id="payment-method"
              value={paymentMethod}
              className="px-2 py-1 border rounded"
            >
              <option value="cash">Cash</option>
              <option value="qris">QRIS</option>
              <option value="debit">Debit</option>
            </select>
          </div>

          <button
            className="w-full px-3 mt-4 text-white transition duration-500 bg-blue-600 rounded-md h-9 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700"
            onClick={handlePayment}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalInvoice;
