import logo from './logo.svg';
import './App.css';

function Hello() {
  // const employe={
  //   name: "10kcooders"
  // }
  // return (
  //   <div>
  //     <h1>hai this is sainaik wel come to my react webpage{employe.name}</h1>
      
  //   </div>
  // );

  const isSubscribed=true
  if(isSubscribed){
    return <h1>thanks for subscribe</h1>
  }else{
    return <h1>please subscribe </h1>
  }
}
export default Hello;
