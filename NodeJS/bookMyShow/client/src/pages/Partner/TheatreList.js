import React, { useState, useEffect } from "react";
import { Button, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import TheatreForm from "./TheatreForm";
import DeleteTheatreModal from "./DeleteTheatreModal";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/loaderSlice";
import {
  GetAllTheatres,
  GetAllTheatresPartnerOwns,
} from "../../calls/theatres";
import ShowModal from "./ShowModal";
function TheatreList() {
  const { user } = useSelector((store) => store.users);
  const [theatres, setTheatres] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedTheatre, setSelectedTheatre] = useState(null);
  const [formType, setFormType] = useState("add");
  const dispatch = useDispatch();
  const [isShowModalOpen, setIsShowModalOpen] = useState(false);
  const tableHeadings = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, data) => {
        if (data.isActive) {
          return "Approved";
        }
        return "Pending/Blocked";
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, data) => {
        return (
          <div>
            <Button
              onClick={() => {
                setIsModalOpen(true);
                setSelectedTheatre(data);
                setFormType("edit");
              }}
            >
              <EditOutlined />
            </Button>
            <Button
              onClick={() => {
                setIsDeleteModalOpen(true);
                setSelectedTheatre(data);
              }}
            >
              <DeleteOutlined />
            </Button>
            {data.isActive && (
              <Button
                onClick={() => {
                  setIsShowModalOpen(true);
                  setSelectedTheatre(data);
                }}
              >
                + Shows
              </Button>
            )}
          </div>
        );
      },
    },
  ];

  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await GetAllTheatresPartnerOwns(user["_id"]);
      const allTheatres = response.data;
      setTheatres(
        allTheatres.map((theatre) => ({
          ...theatre,
          key: `theatre${theatre.id}`,
        }))
      );
      dispatch(hideLoading());
    } catch (err) {
      console.log(err.message);
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="d-flex justify-content-start">
        <Button
          onClick={() => {
            setIsModalOpen(true);
            setFormType("add");
          }}
        >
          Add Theatre
        </Button>
      </div>
      <Table dataSource={theatres} columns={tableHeadings} />
      {isModalOpen && (
        <TheatreForm
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedTheatre={selectedTheatre}
          formType={formType}
          setSelectedTheatre={setSelectedTheatre}
          getData={getData}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteTheatreModal
          isDeleteModalOpen={isDeleteModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          selectedTheatre={selectedTheatre}
          setSelectedTheatre={setSelectedTheatre}
          getData={getData}
        />
      )}

{isShowModalOpen && (
        <ShowModal
          isShowModalOpen={isShowModalOpen}
          setIsShowModalOpen={setIsShowModalOpen}
          selectedTheatre={selectedTheatre}
          setSelectedTheatre={setSelectedTheatre}
          getData={getData}
        />
      )}
    </>
  );
}

export default TheatreList;
