import img1 from '../../public/img/Img1.png'
import imgI from '../../public/img/img1.1.png'
import imgII from '../../public/img/img1.2.png'
import imgIII from '../../public/img/img1.3.png'
import imgIV from '../../public/img/img1.4.png'
import imgV from '../../public/img/img1.5.png'
import imgVI from '../../public/img/img1.6.png'
const PageHome = () => {
    return (
        <div className='mt-32 mb-5 w-[1120px]  flex justify-around flex-col  m-auto leading-7 '>
            <p className='text-[#333] text-[15px] uppercase font-[500] mx-9 tracking-wider mb-2'>Lê Trần Gia Hân</p>
            <h1 className='uppercase text-[#383838] text-[27px] font-[600] mx-9 mb-5 tracking-wider'>Cách xịt nước hoa đúng cách và 3 vị trí xịt thơm lâu nhất  </h1>
            <img className="w-[1050px] h-[470px] m-auto" src={img1} alt="" />
            <ul className='I mx-9 mt-5'>
                <p className='text-[20px] font-[600]'>I. Những sai lầm thường gặp khi sử dụng nước hoa có thể bạn chưa biết  :</p>
                <div className='mx-11'>
                    <li>• Sử dụng nhiều mùi hương làm giảm bám mùi nước hoa.</li>
                    <li>• Xịt dặm nước hoa quá nhiều lần trong ngày.</li>
                    <li>• Xịt ở những vị trí không bám mùi.</li>
                    <li>• Chà xát mạnh sau khi xịt.</li>
                </div>
            </ul>
            <div>
                <ul className='II mx-9 mt-5'>
                    <p className='text-[20px] font-[600]'>II. Những vị trí xịt nước hoa giúp lưu hương lâu  :</p>
                    <div className='mx-11'>
                        <li>• Trên cổ tay</li>
                        <li>• Trên cổ</li>
                        <li>• Tóc</li>
                    </div>
                </ul>
            </div>
            <div className='flex gap-3 mt-3 m-auto'>
                <img className="w-[450px] h-[450px]" src={imgI} alt="" />
                <img className="w-[450px] h-[450px]" src={imgII} alt="" />
            </div>
            <div>
                <ul className='III mx-9 mt-5'>
                    <p className='text-[20px] font-[600]'> III. Hướng dẫn A - Z xịt nước hoa đúng cách lưu mùi suốt ngày dài  :</p>
                    <div className='mx-11'>
                        <li>• Bước 1: Tắm rửa sạch sẽ, hương thơm sẽ bám lâu hơn trên da sạch.</li>
                        <li>• Bước 2: Lựa chọn nước hoa và vị trí xịt phù hợp.</li>
                        <li>• Bước 3: Giữ khoảng cách phù hợp.</li>
                        <li>• Bước 4: Chờ đợi nước hoa khô tự nhiên. </li>
                        <li>• Bước 5: Không chà xát và xịt thêm nếu cần thiết.</li>
                    </div>
                </ul>
            </div>
            <div>
                <ul className='IV mx-9 mt-5 mb-5'>
                    <p className='text-[20px] font-[600]'>IV. Gợi ý một số dòng nước hoa lưu trữ mùi hương lâu  :</p>
                    <li className='mx-10 font-[500]'>1. Tinh dầu nước hoa Matcha Chilling Day – CODEDECO:</li>
                    <p className='mx-14'>Matcha Chilling Day - Sự kết hợp giữa hương trà xanh thanh mát và hương hoa quả chua thanh,
                        đôi chút ngọt ngào của dừa đã tạo nên một nét tổng thể hài hòa, dễ chịu. Độ giữ mùi từ 6 - 8h.</p>
                    <div className='flex justify-center mt-3 gap-3'>
                        <img className="w-[450px] h-[450px]" src={imgIII} alt="" />
                        <img className="w-[450px] h-[450px]" src={imgIV} alt="" />
                    </div>
                    <li className='mx-10 font-[500] mt-4'>2. Tinh dầu nước hoa Love Letter – CODEDECO:</li>
                    <p className='mx-14'>Với mùi thanh chua nhẹ nhàng của quả Quýt. Mang lại cảm giác nịnh mũi trong tầng hương đầu tiên.
                        Đến tầng hương tiếp theo, Love Letter chuyển mình sang những cánh hoa tao nhã, nhẹ nhàng và nữ tính,
                        thêm một chút trưởng thành và bản lĩnh của hoa Mộc Lan và cuối cùng là sự góp mặt của hoa nhài. Độ lưu hương: 6 - 8h.</p>
                    <div className='flex justify-center mt-3 gap-3'>
                        <img className="w-[450px] h-[450px]" src={imgV} alt="" />
                        <img className="w-[450px] h-[450px]" src={imgVI} alt="" />
                    </div>
                </ul>
                <div>
                    <div className='flex gap-9 my-5'>
                        <p className='bg-black text-white p-3 w-[250px] rounded-md'><b>Hotline: 0967.077.882</b> </p>
                        <p className='bg-black text-white p-3 w-[250px] rounded-md'><b>CSKH : 0383.226.567 </b> </p>
                    </div>
                    <p className='text-[20px] font-[600]'>CODEDECO VIETNAM</p>
                    <ul className='list-disc mx-5'>
                        <li><b>Facebook:</b> <a style={{ textDecorationLine: 'underline', fontSize: 15 }} href="https://www.facebook.com/profile.php?id=61555159087139" target='_blank'>CODEDECO - SCENTS CODE FOR YOUR STYLE</a></li>
                        <li><b>Instagram:</b> <a style={{ textDecorationLine: 'underline', fontSize: 15 }} href="https://www.instagram.com/codedeco_art/" target='_blank'>𝐂𝐎𝐃𝐄𝐃𝐄𝐂𝐎®️</a></li>
                        <li><b>Shopee:</b>   <a style={{ textDecorationLine: 'underline', fontSize: 15 }} href="https://shopee.vn/codedeco.art" target='_blank'>𝐂𝐎𝐃𝐄𝐃𝐄𝐂𝐎®️</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PageHome