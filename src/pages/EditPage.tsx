
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";

interface Courses {
  id: number;
  title: string;
  duration: number;
  thumbnail: string;
  category: string;
}

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  
  const { data, isLoading } = useQuery<Courses>({
    queryKey: ["course", id],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3000/courses/${id}`
      );
      return response.data;
    },
  });
  const { mutate, isPending } = useMutation({
    mutationFn: async (course: Courses) => {
      return await axios.put(`http://localhost:3000/courses/${id}`,course);
    },
   
  });

  const onFinish = (formData: Courses) => {
    mutate(formData);
  };

  if (isLoading) {
    return <div className="p-6">Đang tải dữ liệu...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">
        Sửa khóa học
      </h1>

      <Form layout="vertical" className="space-y-6" onFinish={onFinish}initialValues={data}>
  
        <Form.Item label="Tên khóa học"name="title">
          <Input placeholder="Nhập tên khóa học" />
        </Form.Item>
        <Form.Item label="Thumbnail" name="thumbnail">
          <Input placeholder="Nhập link hình ảnh" />
        </Form.Item>

        <Form.Item label="Category" name="category" >
          <Select  placeholder="Chọn danh mục"
            options={[
              {
                value: "js",
                label: "JavaScript",
              },
              {
                value: "php",
                label: "PHP",
              },
              {
                value: "react",
                label: "React",
              },
            ]}
          />
        </Form.Item>

        <Button  type="primary" htmlType="submit" loading={isPending}>
          Cập nhật
        </Button>
      </Form>
    </div>
  );
}

export default EditPage;
