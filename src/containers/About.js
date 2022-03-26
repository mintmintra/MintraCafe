import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <Header />
            <div className="container col-md-5">
                <h3>สวัสดีค่ะ</h3>
                <p>ร้านเราเป็นร้านเก่าแก่ เปิดมานานนับ 10 ปี เราให้ความสำคัญกับความสะอาดเป็นอย่างมาก ลูกค้ามั่นใจเลยว่าอาหารของเรานั้น สด ใหม่ ทุกวัน
                    อาหารที่ทำจากวัตถุดิบที่คัดมาโดยเฉพาะ สดใหม่ สะอาด ถูกหลักในราคาไม่แพง
                </p>
                <h5 className="text-success">จาก Mintra Cafe</h5>
            </div>
            <Footer company="Usernamemint" email="mintrawork1565@gmail.com" />
        </div>
    )
}

export default About;