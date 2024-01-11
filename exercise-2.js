// Paste the complete MQL here
// **Exercise #2**

// - ให้เขียน Query โดยมีรายละเอียดดังนี้
//     - หายอดขายทั้งหมดและจำนวนของ Pizza ในแต่ละ Size
//     - โดยที่ให้เรียงผลลัพธ์ตามยอดขายที่มากที่สุด
// group - sort
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$size",
      total_amount: { $sum: "$total_price" },
      total_quantity: { $sum: "$quantity" },
    },
  },
  { $sort: { total_quantity: -1 } },
]);
