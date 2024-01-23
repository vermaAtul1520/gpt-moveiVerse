import { Bars } from 'react-loader-spinner'
export const Loader = () => {
    return (
        <div className='my-5 flex justify-center md:w-[50%] m-auto rounded-lg flex-wrap h-[50vh] align-content: center'>
            <Bars
                height="200"
                width="100"
                color="white"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};