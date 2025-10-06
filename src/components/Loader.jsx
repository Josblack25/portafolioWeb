import { Html, useProgress, } from '@react-three/drei';

const CanvasLoader = () => {

  const {progress} = useProgress();

  return (

    <Html>
      <span className='mr-3 size-5 animate-spin ..." viewBox="0 0 24 24" '></span>
      <p style={{ fontSize:14,
        color:'#f2fd7d',
        fontWeight:800,
        marginTop: 40,
      }}>
        {progress.toFixed(2)}%
      </p>
    </Html>

  )
};

export default CanvasLoader;