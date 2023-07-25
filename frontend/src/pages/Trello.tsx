import React, { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  PlusIcon,
  DotsVerticalIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import CardItem from "../components/trello_page/CardItem";
import BoardData from "../utils/board-data.json";
import Modal from "../components/trello_page/Modal";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import axios from "axios";

const Trello = () => {
  const [ready, setReady] = useState(false);
  const [boardData, setBoardData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const [email, setEmail] = useState("");

  // Fetching data from the db
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    const verifyIdentity = async () => {
      try {
        const response = await axios.post("http://localhost:3000/verify", {
          token: token,
        });
        return response.data.data.email;
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    verifyIdentity()
      .then((verifiedEmail) => {
        console.log(verifiedEmail);
        setEmail(verifiedEmail);
        axios
          .post("http://localhost:3000/getItems", {
            email: verifiedEmail,
          })
          .then((response) => {
            setBoardData(response.data); // Store the response data in the state variable
            setReady(true);
          })
          .catch((error) => {
            console.error(error);
            setReady(true);
          });
      })
      .catch((error) => {
        console.error(error);
        setReady(true);
      });
  }, []);

  const modalCallback = (showModal) => {
    setShowModal(showModal);
  };

  function deleteItemById(itemId) {
    // Create a shallow copy of the data array
    const newData = [...boardData];
  
    // Loop through each board
    for (let i = 0; i < newData.length; i++) {
      const board = newData[i];
      // Find the index of the item with the given ID in the board's items array
      const itemIndex = board.items.findIndex((item) => item.id === itemId);
      // If the item is found in the board, remove it from the items array
      if (itemIndex !== -1) {
        board.items.splice(itemIndex, 1);
        break; // Exit the loop since the item has been deleted
      }
    }
  
    // Return the updated data
    return newData;
  }

  const deleteCallBack = (id) => {
    setBoardData(deleteItemById(id));
    axiosPost();
  };

  const updateCallBack = (item) => {
    const newData = [...boardData];
    for (let i = 0; i < newData.length; i++) {
      const board = newData[i];
      const itemIndex = board.items.findIndex((i) => i.id === item.id);
      if (itemIndex !== -1) {
        board.items[itemIndex] = item;
        break;
      }
    }
    setBoardData(newData);
    axiosPost();
  };

  const onDragEnd = (re) => {
    if (!re.destination) return;
    let newBoardData = boardData;
    var dragItem =
      newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
    newBoardData[parseInt(re.source.droppableId)].items.splice(
      re.source.index,
      1
    );
    newBoardData[parseInt(re.destination.droppableId)].items.splice(
      re.destination.index,
      0,
      dragItem
    );
    setBoardData(newBoardData);
    axiosPost();
  };

  const newItem = (item) => {
    const boardId = selectedBoard;
    let newBoardData = boardData;
    newBoardData[boardId].items.push(item);
    setBoardData(newBoardData);
    axiosPost();
  };

  const axiosPost = () => {
    axios
          .post("http://localhost:3000/updateItems", {
            email: email,
            trelloData: boardData,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
  }

  return (
    <>
      <div className="p-10 flex flex-col h-screen">
        {/* Board header */}
        <div className="flex flex-initial justify-between">
          <div className="flex items-center">
            <h4 className="text-4xl text-black">Trello Board</h4>
          </div>

          <ul className="flex space-x-3">
            <li>
              <button
                className="border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center
              rounded-full"
              >
                <PlusIcon className="w-5 h-5 text-gray-500" />
              </button>
            </li>
          </ul>
        </div>

        {/* Board columns */}
        {ready && (
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-4 gap-5 my-5">
              {boardData.map((board, bIndex) => {
                return (
                  <div key={board.name}>
                    <Droppable droppableId={bIndex.toString()}>
                      {(provided, snapshot) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          <div
                            className={`bg-gray-100 rounded-md shadow-md
                          flex flex-col relative overflow-hidden
                          ${snapshot.isDraggingOver && "bg-green-100"}`}
                          >
                            <span className="w-full h-1 inset-x-0 top-0"></span>
                            <h4 className=" p-3 flex justify-between items-center mb-2">
                              <span className="text-2xl text-black">
                                {board.name}
                              </span>
                            </h4>

                            <div
                              className="overflow-y-auto overflow-x-hidden h-auto"
                              style={{ maxHeight: "calc(100vh - 290px)" }}
                            >
                              {board.items.length > 0 &&
                                board.items.map((item, iIndex) => {
                                  return (
                                    <CardItem
                                      key={item.id}
                                      data={item}
                                      index={iIndex}
                                      deleteItem={deleteCallBack}
                                      updateItem={updateCallBack}
                                      className="m-3"
                                    />
                                  );
                                })}
                              {provided.placeholder}
                            </div>

                            {showModal && selectedBoard === bIndex ? (
                              <Modal
                                modalCallback={modalCallback}
                                itemUpdateCallback={newItem}
                                addOrEdit={"Add"}
                              />
                            ) : (
                              <button
                                className="flex justify-center items-center my-3 space-x-2 text-lg"
                                onClick={(e) => {
                                  console.log(e);
                                  setSelectedBoard(bIndex);
                                  setShowModal(true);
                                }}
                              >
                                <span>Add task</span>
                                <PlusCircleIcon className="w-5 h-5 text-gray-500" />
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </Droppable>
                  </div>
                );
              })}
            </div>
          </DragDropContext>
        )}
      </div>
    </>
  );
};

export default Trello;
