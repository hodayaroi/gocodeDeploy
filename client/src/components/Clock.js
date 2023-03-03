import useClock from '../customHooks/useClock';

const Clock = () => {
    const clock = useClock();
    return <h1 >{clock}</h1>;
  }
  

  export default Clock