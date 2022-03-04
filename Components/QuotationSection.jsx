import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Modal from './Modal'
import { Form, Input } from 'antd'
import Editor from './Editor'
import Loader from './Loader'

const QuotationSection = () => {

    let [isOpen, setIsOpen] = useState(false);
    const [editorData, setEditorData] = useState("");

    const handleEditorData = (value) => {
        setEditorData(value)
    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const sendQuotation = (values) => {
        values.projectDescription = editorData;
        console.log(values)
    }

    return (
        <section className='py-20 my-32 h-auto lg:h-[45rem] relative container mx-auto'>
            <Modal open={isOpen} closeModal={closeModal} openModal={openModal}>
                <h1 className='text-xl lg:text-3xl dark:text-white text-primary font-bold text-center font-saira'>Send us your project details</h1>
                <Form
                    layout='vertical'
                    className='px-5 py-5 grid grid-cols-1 lg:grid-cols-2 gap-5'
                    name='quotation'
                    onFinish={sendQuotation}
                >
                    <Form.Item
                        label={
                            <label className='font-semibold font-ubuntu text-xl dark:text-white text-primary'>Name</label>
                        }
                        name='name'
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input className='rounded-sm' size="large" placeholder='Name' />
                    </Form.Item>
                    <Form.Item
                        label={
                            <label className='font-semibold font-ubuntu text-xl dark:text-white text-primary'>Email</label>
                        }
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input type="email" className='rounded-sm' size="large" placeholder='Email' />
                    </Form.Item>
                    <Form.Item
                        label={
                            <label className='font-semibold font-ubuntu text-xl dark:text-white text-primary'>Project Details</label>
                        }
                        name="projectDescription"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                        className="col-span-2"
                    >
                        <Editor handleEditorData={handleEditorData} />
                    </Form.Item>


                </Form>
            </Modal>
            <div className='z-30'>
                <h1 className='text-2xl mt-5 lg:mt-20 lg:text-3xl 2xl:text-4xl font-bold text-center dark:text-white text-primary normal-transition font-saira wow animate__animated animate__fadeInUp' data-wow-delay="2s">
                    Do not measure about costing of your dream project ? <br />
                    Let us know by email we&apos;ll give you a quote.
                </h1>
                <div className='flex justify-center items-center my-10'>
                    <button onClick={() => setIsOpen(!isOpen)} type='button' className='text-2xl hover:shadow-xl font-ubuntu font-bold hover:dark:bg-darkLight text-primary dark:text-white dark:bg-secondary bg-purple-200 normal-transition px-5 py-3 rounded-lg wow animate__animated animate__fadeInUp' data-wow-delay="2.5s">Get Quotation</button>
                </div>
            </div>
            <div className='z-0'>
                <div className='absolute top-0 left-1/2 -translate-x-1/2'>
                    <Image className='bg-transparent wow animate__animated animate__fadeInUp' data-wow-delay="1.5s" height={96} width={670} src="/seoscore1.png" alt="computer" />
                </div>
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2'>
                    <Image className='bg-transparent wow animate__animated animate__fadeInUp' data-wow-delay="3s" height={167} width={359} src="/seoscore2.png" alt="computer" />
                </div>
                <div className='absolute left-0 right-0 flex justify-center bottom-0'>
                    <Image className='bg-transparent wow animate__animated animate__fadeInUp' data-wow-delay="3.5s" layout='intrinsic' height={360} width={1130} src="/seoscore3.png" alt="computer" />
                </div>
            </div>
        </section>
    )
}

export default QuotationSection