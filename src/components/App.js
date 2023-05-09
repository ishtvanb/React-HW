import { Route, Routes } from "react-router-dom";
import Home from 'pages/Home';
import Dogs from 'pages/Dogs';
import DogDetails from 'pages/DogDetails';
import { Layout } from './Layout';

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="dogs/:dogId" element={<DogDetails />} />
        </Route>
      </Routes>
    );
  };

