import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

function createGuidId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getPriorityValue(priorityString) {
  switch (priorityString.toLowerCase()) {
    case "low":
      return 0;
    case "medium":
      return 1;
    case "high":
      return 2;
    default:
      return 0; // Default to low priority if an invalid value is provided
  }
}

export default function Modal({
  modalCallback,
  itemUpdateCallback,
  addOrEdit,
}) {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const [itemName, setItemName] = useState("");
  const [itemUrgency, setItemUrgency] = useState("Low");

  const handleClose = () => {
    modalCallback(false);
    setOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (itemName !== "") {
      let task = {};
      if (addOrEdit === "Edit") {
        task = {
          title: itemName,
          priority: getPriorityValue(itemUrgency),
        };
      } 
      else {
        task = {
          id: createGuidId(),
          title: itemName,
          priority: getPriorityValue(itemUrgency),
          chat: 0,
          attachment: 0,
          assignees: [],
        };
      }
      itemUpdateCallback(task);
      handleClose();
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={() => {}}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          ></span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
              <div className="flex items-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">
                {addOrEdit === "Add" ? "Add task" : "Edit task"}
                </h3>
              </div>
              <div className="mt-4">
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Task name
                    </label>
                    <input
                      type="text"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                      className="mt-1 px-3 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Urgency
                    </label>
                    <select
                      value={itemUrgency}
                      onChange={(e) => setItemUrgency(e.target.value)}
                      className="mt-1 px-3 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                    >
                      {addOrEdit === "Add" ? "Add task" : "Edit task"}
                    </button>
                  </div>
                </form>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                  onClick={handleClose}
                  ref={cancelButtonRef}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
