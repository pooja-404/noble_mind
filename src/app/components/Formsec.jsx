"use client";
import Image from "next/image"
import Button from "./Button";
import { useState, useRef } from 'react'
export default function Formsec() {
    const checkRef = useRef(null);
    const [formData, setFormData] = useState({
        Name: "",
        LastName: "",
        email: "",
        Massage: "",
    });
    const [formErrors, setFormErrors] = useState({
        Name: "",
        LastName: "",
        email: "",
        Massage: "",
    });
    const [showPopup, setShowPopup] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const regex = {
            Name: /^[a-zA-Z\s]+$/,
            LastName: /^[a-zA-Z\s]+$/,
            email:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            Massage: /^[a-zA-Z\s]+$/,
        };
        const errors = {};
        if (!regex.Name.test(formData.Name)) {
            errors.Name = "First Name is invalid.";
        }
        if (!regex.LastName.test(formData.LastName)) {
            errors.LastName = "Last Name is invalid.";
        }
        if (!regex.email.test(formData.email)) {
            errors.email = "Email is invalid.";
        }
        if (!regex.Massage.test(formData.Massage)) {
            errors.Massage = "Massage is invalid.";
        }

        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            setShowPopup(true);
        }
    };
    const handlePopupClose = () => {
        setShowPopup(false);
        setFormData({
            Name: "",
            LastName: "",
            email: "",
            Massage:"",
        });
        setFormErrors({
            Name: "",
            LastName: "",
            email: "",
            Massage:"",
        });
    };
    return (
        <>
            <div className="max-w-[1140px] 2xl:max-w-[1320px] container mx-auto px-3 md:py-16 py-10 lg:pt-32 " id="service">
                <div className="flex flex-wrap lg:flex-row flex-col-reverse -mx-3">
                    <div className="lg:w-1/2 w-full lg:pt-0 pt-7 lg:pr-12  px-3" data-aos="fade-right">
                        <h2 className="text-[#131200] lg:max-w-[560px] font-Outfit font-semibold  lg:text-[48px]  sm:text-5xl text-3xl md:leading-[57.6px] pt-3 max-lg:text-center">Contact <span className="font-Outfit font-light "> Us</span></h2>
                        <p className="text-[#131200] lg:max-w-[409px] opacity-[70%] font-Exo sm:text-base text-sm font-normal md:leading-[24px] pb-1 max-lg:text-center pt-2">Feel free to contact us any time . We will get back to you as soon as we can! </p>
                        <form onSubmit={handleSubmit}>
                            <div className="sm:flex gap-4 ">
                                <div className="flex flex-col sm:w-[50%] w-full pt-1">
                                    {" "}
                                    <label
                                        htmlFor="Name"
                                        className="text-[#131200] font-Exo sm:text-base text-sm font-normal leading-[24px] opacity-[70%]  pb-sm-3 pt-2  pb-1 "
                                    >
                                        Name
                                    </label>
                                    <div className="inputPlace">
                                        <input
                                            type="text"
                                            id="Name"
                                            name="Name"
                                            value={formData.Name}
                                            onChange={handleChange}

                                            className=" border-[#13120033] px-3 w-full h-[48px] rounded-[8px] border text-[#131200] font-Exo text-base font-normal leading-[24px] opacity-[70%]"
                                        />
                                    </div>
                                    {formErrors.Name && (
                                        <p className="error font-roboto text-red-500">{formErrors.Name}</p>
                                    )}
                                </div>
                                <div className="flex flex-col  sm:w-[50%] w-full pt-2 pt-sm-0">
                                    {" "}
                                    <label
                                        htmlFor="LastName"
                                        className="text-[#131200] font-Exo sm:text-base text-sm font-normal leading-[24px] opacity-[70%] sm:pt-1 pb-1 "
                                    >
                                        Last Name
                                    </label>
                                    <div className="inputPlace  ">
                                        <input
                                            type="text"
                                            id="LastName"
                                            name="LastName"
                                            value={formData.LastName}
                                            onChange={handleChange}
                                            className="border-[#13120033] px-3 w-full h-[48px] rounded-[8px] border text-[#131200] font-Exo text-base font-normal leading-[24px] opacity-[70%]"
                                        />
                                    </div>
                                    {formErrors.LastName && (
                                        <p className="error font-roboto text-red-500">{formErrors.LastName}</p>
                                    )}
                                </div>
                            </div>
                            <div className="d-flex flex-column  w_100 pt-2 sm:pt-3 pt-sm-0">
                                {" "}
                                <label
                                    htmlFor="email"
                                    className="text-[#131200]  font-Exo sm:text-base text-sm font-normal leading-[24px] opacity-[70%] py-1"
                                >
                                    Email
                                </label>
                                <div className="inputPlace  ">
                                    <input
                                        type="mail"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="border-[#13120033] px-3 w-full h-[48px] mt-1 rounded-[8px] border text-[#131200] font-Exo text-base font-normal leading-[24px] opacity-[70%]"
                                    />
                                </div>
                                {formErrors.email && (
                                    <p className="error font-roboto lh-20  fw-normal fs-xs off-gray text-red-500">{formErrors.email}</p>
                                )}
                            </div>
                            <div className=" pt-2 sm:pt-3">
                                {" "}
                                <label
                                    htmlFor="Name"
                                    className="text-[#131200] font-Exo sm:text-base text-sm font-normal leading-[24px] opacity-[70%]  pb-sm-3 pt-2  pb-2 "
                                >
                                    Message
                                </label>
                                <div className="inputPlace">
                                    <textarea
                                        className=" px-2 border-[#13120033] w-full resize-none mt-1 h-[135px] rounded-[8px] border text-[#131200] font-Exo text-base font-normal leading-[24px] opacity-[70%]"
                                    />
                                </div>
                                {formErrors.Massage && (
                                    <p className="error font-roboto lh-20  fw-normal fs-xs off-gray text-red-500">{formErrors.Massage}</p>
                                )}

                            </div>
                            <Button type="submit" name='bg-gradient mt-4' text='Submit' />
                            {showPopup && (
                                <div className="popup">
                                    <p className="font-roboto fw-medium fs_xmd mb-0 pb-2 text_Main">
                                        Form submitted successfully!
                                    </p>
                                    <Button onClick={handlePopupClose} name='bg-gradient' text='Submit' />
                                </div>
                            )}
                        </form>
                    </div>
                    <div className="lg:w-1/2 w-full px-3 max-lg:flex justify-center" data-aos="fade-left">
                        <Image
                            src="/assets/images/formimg.webp"
                            alt="logo" width={598}
                            height={572} className="object-cover rounded-[12px] lg:h-full lg:w-full" />
                    </div>
                </div>

            </div>
        </>
    )
}
