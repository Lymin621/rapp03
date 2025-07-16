import './App.css';
import Header from './component/Header';
import Body from "./component/Body";
import SubCon from './component/SubCon';
import Footer from './component/Footer';

function App() {
  const dept = "인사";
  const SubProps = {
    name: "고길동",
    location: "부천시",
    favorList: ["파스타", "빵", "떡볶이"]
  };
  return (
    <div className="App">
      <Header />
      <Body deptName={dept} location="강남" deptNo="한글" />
      <SubCon subp = {SubProps} />
      <subCon {...SubProps}>
        <p style={{backgroundColor : "red", color: "#fff"}}>
          부모App컴포넌트에서 전달하는 p태그</p>
      </subCon>
      <Footer />
    </div>
  );
}

export default App;
