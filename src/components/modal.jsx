
import Modal from 'react-modal';
import ReactStars from "react-rating-stars-component";


const PopupModal = ({ isOpen, closeModal, book }) => {



  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Book Modal"
    >

    <div>
            {/* <!-- Modal content --> */}
            <div className="">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-300">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                            {book && book.name}
                        </h3>                        
                    </div>
                    
                    <button onClick={closeModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    
                </div>

                
                <div className='p-4 md:p-5 space-y-4'>
                        <h3 className="text-l text-gray-500 italic">
                            by {book && book.author}
                        </h3>
                                            
                </div>
                
                {/* <!-- Modal body --> */}
                <div className="p-4 md:p-5 space-y-4">
                    <p className="text-base leading-relaxed text-gray-500 italic">
                            My thoughts on the piece -
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 italic">
                        {book && book.description}
                    </p>
                    <ReactStars
                        count={5}
                        value={book && book.rating}
                        size={24}
                        edit={false}
                        isHalf={true}
                        activeColor="#ffd700"
                    />,
                </div>


    </div>



    </div>

    </Modal>
  );
};


export default PopupModal;