# Giao diện hệ thống thương mại điện tử mini

Một ứng dụng Web / Website Thương mại điện tử được xây dựng bằng React JS và Tailwind CSS. Project này bao gồm cả giao diện dành cho khách hàng mua sắm và giao diện quản trị (admin) để quản lý sản phẩm và đơn hàng.

## Công Nghệ Sử Dụng

* **Frontend:**
    * React JS
    * Tailwind CSS

## Tính Năng

Project bao gồm các tính năng chính sau:

### Giao diện Khách hàng

* **Trang Chủ:**
    * Hiển thị các sản phẩm mới nhất (Latest products).
    * Hiển thị các sản phẩm bán chạy nhất (Best selling products).
    * Khu vực đăng ký nhận bản tin (Newsletter subscription box).
    * Footer (Chân trang).
* **Trang Danh Sách Sản Phẩm (Products Collection Page):**
    * Hiển thị tất cả các sản phẩm có trên website.
    * Lọc sản phẩm (Product filter).
    * Sắp xếp sản phẩm (Product sort).
    * Tìm kiếm sản phẩm (Product search).
* **Trang Chi Tiết Sản Phẩm (Product Page):**
    * Hiển thị bộ sưu tập hình ảnh sản phẩm (Product image gallery).
    * Hiển thị tên sản phẩm (Title), giá (Price), mô tả (Description).
    * Nút "Thêm vào giỏ hàng" (Add to cart button).
    * Hiển thị các sản phẩm liên quan (Related products).
* **Các Trang Khác:**
    * Trang Đặt hàng (Place Order page).
    * Trang Giỏ hàng (Cart page).
    * Trang Danh sách đơn hàng của tôi (My Order list page).
    * Trang Giới thiệu (About Page).
    * Trang Liên hệ (Contact Page).
    * Trang Đăng nhập (Login).
    * Trang Đăng ký (Signup).

### Giao diện Quản trị (Admin)

* Thêm sản phẩm mới (Add new products).
* Liệt kê và xóa sản phẩm (List and delete the products).
* Hiển thị và cập nhật trạng thái đơn hàng (Display and update the orders).

## Hướng Dẫn Cài Đặt

1.  Clone kho chứa về máy:
    ```bash
    git clone <địa chỉ kho chứa của bạn>
    cd <tên thư mục project>
    ```
2.  Cài đặt các dependencies cho frontend:
    ```bash
    cd frontend # Nếu frontend là một thư mục riêng
    npm install # hoặc yarn install
    ```
