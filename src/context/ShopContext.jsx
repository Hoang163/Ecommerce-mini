import React, { createContext } from "react"; // Nhập hàm createContext từ thư viện React để tạo context
import { products } from "../assets/assets"; // Nhập dữ liệu sản phẩm từ file assets.js

// Tạo một đối tượng context mới có tên là ShopContext
// Context này sẽ được sử dụng để chia sẻ dữ liệu liên quan đến cửa hàng
export const ShopContext = createContext();

// Tạo một component functional có tên là ShopContextProvider
// Component này sẽ cung cấp dữ liệu cho các component con của nó thông qua Context API
const ShopContextProvider = (props) => {

  const currency = "$";
  const delivery_fee = 10;

  // Tạo một đối tượng value chứa các dữ liệu mà bạn muốn chia sẻ thông qua context
  const value = {
    products, // Mảng dữ liệu sản phẩm
    currency, 
    delivery_fee, 
  };

  // Trả về JSX để render component Provider của ShopContext
  return (
    // ShopContext.Provider là một component cung cấp dữ liệu context cho các component con
    // Prop 'value' nhận đối tượng 'value' chứa dữ liệu cần chia sẻ
    <ShopContext.Provider value={value}>
      {/* {props.children} đại diện cho bất kỳ component nào được bọc bên trong ShopContextProvider */}
      {props.children}
    </ShopContext.Provider>
  );
};

// Export component ShopContextProvider để có thể sử dụng nó ở các phần khác của ứng dụng
export default ShopContextProvider;