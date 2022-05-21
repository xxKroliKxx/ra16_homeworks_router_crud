import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
//import Post from "./Post";
import EditPost from "./EditPost";
import Posts from "./Posts";
import CreateButton from "./CreateButton";
import EditButton from "./EditButton";

function App() {
    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/posts/:id" element={<EditPost Footer={EditButton}/>}/>
                    <Route path="/posts/new" element={<EditPost Footer={CreateButton}/>}/>
                    <Route path="*" element={<Posts/>}/>
                </Routes>


            </BrowserRouter>
        </>
    );
}

export default App;
