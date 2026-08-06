import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { data } from "react-router-dom";
interface Coures{
  title: string,
  duration: number,
  thumbnail: number,
  category: string,
}

function AddPage(){
      const onFinish = (data: any)=>{
        mutate(data);
      }
      const{mutate} = useMutation({
        mutationFn: async (data: any)=>{
        }
      })
  return (
   <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Sửa</h1>

      <Form layout="vertical" className="space-y-6"  onFinish={onFinish}>
        {/* Text input */}
        <Form.Item label="tên" name="title"
         rules={[
          {
            required: true,
            message: "Nhập tên ",
          },
        ]}>
          <Input placeholder="Nhập thông tin"/>
        </Form.Item>

        {/* Select */}
        <Form.Item label="duration" name="duration"
         rules={[
          {
            required: true,
            message: "Nhập tên duration",
          },
        ]}>
         <Input placeholder="Nhập thông tin" />
        </Form.Item>
    <Form.Item label="thumbnail" name="thumbnail"
     rules={[
          {
            required: true,
            message: "Nhập tên thumbnail",
          },
        ]}>
  <Input placeholder="Nhập thông tin" />
        </Form.Item>
        <Form.Item label="category" name="category"
        rules={[
          {
            required: true,
            message: "Nhập tên category",
          },
        ]}
        >
     <Select placeholder="chọn danh mục" options={[
      {
        value: "js",
        label: "js"
      },
       {
        value: "php",
        label: "php"
      },
       {
        value: "react",
        label: "react"
      },
     ]}></Select>
        </Form.Item>
        {/* Submit button */}
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default AddPage;