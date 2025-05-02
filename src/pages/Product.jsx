import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [size, setSize] = useState("")
    const [image, setImage] = useState("")

    const fetchProductData = async () => {

        // Tìm sản phẩm dựa trên productId
        const foundProduct = products.find((item) => item._id === productId);
        if (foundProduct) {
            setProductData(foundProduct);
            // Đảm bảo mảng image không rỗng trước khi set ảnh
            if (foundProduct.image && foundProduct.image.length > 0) {
                setImage(foundProduct.image[0]);
            }
        }


    }

    useEffect(() => {
        fetchProductData()
    }, [productId, products]) // Thêm products vào dependency array để effect chạy lại khi danh sách sản phẩm thay đổi

    // Thêm logic xử lý khi productData chưa load xong hoặc không tìm thấy
    if (!productData) {
        return <div className='opacity-0'>Loading...</div>; // Hoặc hiển thị loading state khác
    }


    return (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

            {/* -------- Product Row ---------- */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

                {/* -------- Product Images ---------- */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {/* Kiểm tra productData.image trước khi map */}
                        {productData.image && productData.image.map((item, index) => (
                            <img
                                key={index}
                                onClick={() => setImage(item)}
                                className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ${item === image ? 'border-2 border-orange-500' : ''}`} // Thêm border cho ảnh đang chọn
                                src={item}
                                alt={`Product image ${index + 1}`}
                            />
                        ))}
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img className='w-full h-auto' src={image} alt={productData.name || "Product image"} /> {/* Thêm alt text */}
                    </div>
                </div>

                {/* -------- Product Info ---------- */}
                <div className='flex-1'>

                    {/* Tên sản phẩm */}
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>

                    {/* Đánh giá sao */}
                    <div className='flex items-center gap-1 mt-2'>
                        {/* Phần này đang hardcode 4 sao đầy và 1 sao rỗng */}
                        {/* Bạn có thể thay thế bằng logic render sao dựa trên productData.rating nếu có */}
                        <img className='w-3.5' src={assets.star_icon} alt="star rating" />
                        <img className='w-3.5' src={assets.star_icon} alt="star rating" />
                        <img className='w-3.5' src={assets.star_icon} alt="star rating" />
                        <img className='w-3.5' src={assets.star_icon} alt="star rating" />
                        <img className='w-3.5' src={assets.star_dull_icon} alt="star rating" />
                        <p className='pl-2'>({productData.reviewsCount || 122})</p> {/* Sử dụng reviewCount nếu có, mặc định 122 */}
                    </div>

                    {/* Giá sản phẩm */}
                    <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>

                    {/* Mô tả ngắn (nếu có trong productData) */}
                    {/* Bạn có thể giữ lại hoặc xóa đoạn này tùy ý, nó nằm phía trên các tab */}
                    {/* Nếu productData.description chứa mô tả ngắn, nó sẽ hiển thị ở đây */}
                    {productData.description && <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>}


                    {/* Chọn Size */}
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Select Size</p>
                        <div className='flex gap-2'>
                            {/* Kiểm tra productData.sizes trước khi map */}
                            {productData.sizes && productData.sizes.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSize(item)}
                                    className={`border py-2 px-4 bg-gray-100 cursor-pointer ${item === size ? "border-orange-500" : ""}`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Nút Thêm vào giỏ hàng */}
                    {/* Kiểm tra size đã chọn trước khi cho phép thêm vào giỏ */}
                    <button
                        onClick={() => {
                            if (size) {
                                addToCart(productData._id, size);
                            } else {
                                alert("Please select a size first."); // Hoặc hiển thị thông báo lỗi khác
                            }
                        }}
                        className={`bg-black text-white px-8 py-3 text-sm ${size ? 'active:bg-gray-700' : 'opacity-50 cursor-not-allowed'}`}
                        disabled={!size} // Vô hiệu hóa nút nếu chưa chọn size
                    >
                        ADD TO CART
                    </button>

                    <hr className='mt-8 sm:w-4/5' />

                    {/* Thông tin bổ sung */}
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        {/* Bạn có thể lấy các thông tin này từ productData nếu có */}
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>

            {/* -------- Product Description and Reviews Tabs ---------- */}
            <div className='mt-20'>
                <div className='flex'>
                    {/* Tab Mô tả */}
                    {/* Bạn có thể thêm logic để chuyển đổi giữa các tab nếu cần */}
                    <b className='border px-5 py-3 text-sm cursor-pointer'>Product Description:</b>
                    <p className='border px-5 py-3 text-sm cursor-pointer'>Reviews ({productData.reviewsCount || 122})</p>
                </div>

                {/* Nội dung Tab Mô tả - Đã thay thế bằng mô tả chi tiết */}
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>

                    {/* Tiêu đề tên sản phẩm trong mô tả chi tiết (tùy chọn) */}
                    {/* <h4>{productData.name}</h4> */}

                    <h4>Key Features / Highlights:</h4>
                    <ul>
                        <li>Trendy Off-Shoulder Design: Showcases your neckline and shoulders beautifully.</li>
                        <li>Vibrant Floral Print: Features a lovely multi-color floral pattern (e.g., purple, white, green tones) that is eye-catching and stylish.</li>
                        <li>Chic Puff Sleeves: Adds a touch of sweetness and modern flair.</li>
                        <li>Elasticized Neckline: Ensures a comfortable and secure fit that stays in place.</li>
                        <li>Lightweight Fabric: Made from a breathable material, perfect for warm weather comfort.</li>
                    </ul>

                    <h4>Product Details:</h4>
                    <ul>
                        {/* Thay thế placeholder [Specify Material ...] bằng dữ liệu thực tế nếu có trong productData */}
                        <li><strong>Material:</strong> {productData.material || '[Specify Material, e.g., Polyester Blend, Cotton Blend]'} {/* Note: Material may be an assumption if not in productData */}</li>
                        <li>Style: Casual, Sweet, Feminine, Summer Top</li>
                        <li>Fit: Comfortable, Relaxed Fit around the body; Elasticized secure fit on shoulders.</li>
                        <li>Neckline: Off-Shoulder / Bardot Neckline</li>
                        <li>Sleeve Length: Short / Puff Sleeve</li>
                        <li>Pattern: Floral Print</li>
                        <li>Color: As shown in pictures (Multi-color floral)</li>
                        <li>Available Sizes: S, M, L (Please refer to size chart for exact measurements)</li>
                    </ul>

                    <h4>Why You'll Love This Top:</h4>
                    <ul>
                        <li>Perfect for adding a romantic and stylish touch to your outfit.</li>
                        <li>Versatile enough for various occasions, from casual dates to beach trips or weekend outings.</li>
                        <li>Easy to pair with jeans, shorts, skirts, or trousers.</li>
                        <li>Stay comfortable and chic all day long.</li>
                    </ul>

                    <h4>Size Guide:</h4>
                    <p>Please refer to our Size Chart before purchasing for the best fit.</p>
                    {/* Nếu bạn có dữ liệu đo size trong productData, bạn sẽ cần map qua đây */}
                    {/* Ví dụ: productData.sizeMeasurements.map(...) */}
                    <ul>
                         {/* Các dòng placeholder cho S, M, L. Bạn cần điền dữ liệu thực tế hoặc map từ productData */}
                        <li>S: [Approximate Bust/Waist/Length measurements]</li>
                        <li>M: [Approximate Bust/Waist/Length measurements]</li>
                        <li>L: [Approximate Bust/Waist/Length measurements]</li>
                    </ul>
                    <p><em>(Note: Please allow 1-3cm difference due to manual measurement.)</em></p>

                    <h4>Care Instructions:</h4>
                    <ul>
                        <li>Hand wash recommended or machine wash cold on a gentle cycle.</li>
                        <li>Wash with like colors.</li>
                        <li>Do not bleach.</li>
                        <li>Hang to dry or tumble dry low.</li>
                        <li>Iron on low heat if needed.</li>
                    </ul>

                    <h4>Package Includes:</h4>
                     {/* Sử dụng productData.name cho tên sản phẩm */}
                    <p>1 x {productData.name}</p>

                    <h4>Notes:</h4>
                    <ul>
                        <li>The actual color may vary slightly due to monitor settings and photographic lighting.</li>
                        <li>Please allow 1-3cm measuring deviation due to manual measurement.</li>
                    </ul>
                </div>

                {/* Nội dung Tab Đánh giá sẽ hiển thị ở đây nếu bạn triển khai logic chuyển tab */}

            </div>

            {/* Sản phẩm liên quan */}
            {/* Kiểm tra productData tồn tại trước khi render RelatedProducts */}
            {productData.category && productData.subCategory && <RelatedProducts category={productData.category} subCategory={productData.subCategory} />}

        </div>
    );
}

export default Product;