import React from 'react';

const ErrorComponent = ({ message }) => {
    return (
        <div className="bg-beig text-black px-4 py-3 shadow-md my-4" role="alert">
            <div className="flex">
                <div className="py-1">
                    <svg className="fill-current h-6 w-6 text-black mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-8a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-3 0v-4A1.5 1.5 0 0 1 10 4z" /></svg>
                </div>
                <div>
                    <p className="font-bold font-body">Sorri, an error accured</p>
                    <p className="text-sm font-body">{message}</p>
                </div>
            </div>
        </div>
    );
}

export default ErrorComponent;
