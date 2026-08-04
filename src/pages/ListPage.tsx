import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

function ListPage(){
    const {data,refetch} = useQuery({
        queryKey: ["Coures"],
        queryFn: async () =>{
            const res = await axios.get(`http://localhost:3000/courses`)
            return res.data
        }
    });
    const handleDelete = async (id:number)=>{
        try {
            await axios.delete(`http://localhost:3000/courses/${id}`)
            alert("xóa thành công")
            refetch()
        } catch (error) {
            alert("xóa thất bại")
        }
    }
    const columns=[
           {
      title:"tên",
      dataIndex:"title"
    },
    {
      title:"duration",
      dataIndex:"duration"
    },
    {
      title:"thumbnail",
      dataIndex:"thumbnail"
    },
    {
      title:"category",
      dataIndex:"category"
    },
    {
        title: "action",
        render:(record: any)=>(
            <>
            <Button danger onClick={()=> handleDelete(record.id)}>xóa</Button>
                <Button>
                    <Link to={`/edit/${record.id}`}>sửa</Link>
                </Button>
            </>
        )
    }
    ]
    return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <Table
      columns={columns}
      dataSource={data}
    />
      </div>
    </div>
  );
}


export default ListPage