import React from "react";

const Modal = ({title, children}) => {

        return (
            <div className="absolute z-50 bg-white text-black p-6 shadow-2xl" style={{top: '50%', left: '50%',transform: 'translate(-50%, -50%)'}}>
                <h3 className="text-center font-bold text-xl my-4">{title}</h3>
                {children}
            </div>
        );
};

export default Modal;