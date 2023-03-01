import { FadeLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <FadeLoader color={'rgb(178,11,33)'} className="w-[50px] h-[50px]"></FadeLoader>
        </div>
    );
};

export default Loading;
