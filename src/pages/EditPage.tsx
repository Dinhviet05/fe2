import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
function EditPage() {
    const onFinish = (data: any ) => {
    mutate(data);
  };

 const{mutate} = useMutation({
  mutationFn: async (data: any)=>{
    return await axios.post(`http://localhost:3000/courses`, data);
  }
 })
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>

      <Form layout="vertical" className="space-y-6"  onFinish={onFinish}>
    
        <Form.Item label="tên" name="title">
          <Input placeholder="Nhập thông tin" />
        </Form.Item>

      
        <Form.Item label="duration" name="duration">
         <Input placeholder="Nhập thông tin" />
        </Form.Item>
    <Form.Item label="thumbnail" name="thumbnail">
  <Input placeholder="Nhập thông tin" />
        </Form.Item>
        <Form.Item label="category" name="category">
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
   
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default EditPage;
