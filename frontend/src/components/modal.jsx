
import { FiEdit } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Background backdrop */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      
      {/* Modal panel */}
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg mx-4 sm:mx-auto">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900" id="modal-title">Task Name</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Description</p>
                    <p className="text-sm text-gray-500">Created at: Timestamp</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button" className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold border-2 text-white shadow-sm hover:bg-white hover:text-black hover:border-black sm:ml-3 sm:w-auto">
                <MdDelete />
              </button>
              <button type="button" className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold border-2 text-white shadow-sm hover:bg-white hover:text-black hover:border-black sm:ml-3 sm:w-auto">
                <FiEdit />
              </button>
              <button type="button" onClick={onClose} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                <IoMdArrowRoundBack />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
