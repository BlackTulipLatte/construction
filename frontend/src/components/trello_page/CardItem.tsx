import React from "react";
import {
  ChevronDownIcon,
  PlusIcon,
  DotsVerticalIcon,
  ChatAlt2Icon,
  PaperClipIcon,
} from "@heroicons/react/outline";
import { Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import Modal from "./Modal";

function CardItem({ data, index, deleteItem, updateItem }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [updatedItem, setUpdatedItem] = useState({});

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleUpdate = () => {
    setShowModal(true);
    setShowDropdown(false);
  };

  const itemUpdateCallback = (item) => {
    const updatedItem = {
      id: data.id,
      title: item.title,
      priority: item.priority,
      chat: data.chat,
      attachment: data.attachment,
      assignees: data.assignees
    }
    updateItem(updatedItem);
  };



  const handleDelete = () => {
    // Add your delete logic here
    console.log("Delete clicked for item:", data.id);
    deleteItem(data.id);
    setShowDropdown(false);
  };

  const modalCallback = (showModal) => {
    setShowModal(showModal);
  };

  return (
    <>
      {showModal && (<Modal modalCallback={modalCallback} itemUpdateCallback={itemUpdateCallback} addOrEdit={"Edit"}/>)}
      <Draggable index={index} draggableId={data.id.toString()}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="bg-white rounded-md p-3 m-3 mt-0 last:mb-0"
          >
            <div className="flex items-center space-x-1">
              {" "}
              {/* Create a flex container */}
              <label
                className={`bg-gradient-to-r
                px-2 py-1 rounded text-white text-sm
                ${
                  data.priority === 0
                    ? "from-green-600 to-green-600"
                    : data.priority === 1
                    ? "from-yellow-600 to-yellow-600"
                    : "from-red-600 to-red-600"
                }
                `}
              >
                {data.priority === 0
                  ? "Low Priority"
                  : data.priority === 1
                  ? "Medium Priority"
                  : "High Priority"}
              </label>
              <DotsVerticalIcon
                className="w-4 h-4 text-gray-500 cursor-pointer"
                onClick={handleDropdownClick}
              />
            </div>

            {/* Render dropdown if showDropdown is true */}
            {showDropdown && (
              <div className="flex items-center mt-2 space-x-2">
                <button
                  className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-100"
                  onClick={handleUpdate}
                >
                  Update
                </button>
                <button
                  className="px-2 py-1 text-sm text-red-600 hover:bg-red-100"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            )}

            <h5 className="text-md my-3 text-lg leading-6">{data.title}</h5>
            <div className="flex justify-between">
              <div className="flex space-x-2 items-center">
                <span className="flex space-x-1 items-center">
                  <ChatAlt2Icon className="w-4 h-4 text-gray-500" />
                  <span>{data.chat}</span>
                </span>
                <span className="flex space-x-1 items-center">
                  <PaperClipIcon className="w-4 h-4 text-gray-500" />
                  <span>{data.attachment}</span>
                </span>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
}

export default CardItem;
